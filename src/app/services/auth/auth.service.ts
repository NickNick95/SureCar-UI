import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, take, tap } from 'rxjs';
import { ResponseModel } from 'src/app/models/general/response.model';
import { Login } from 'src/app/models/user/login.model';
import { Logout } from 'src/app/models/user/logout.model';
import { User } from 'src/app/models/user/user.model';
import { CacheService } from '../cache/cache.service';
import { JwtHelperService } from '../jwtHelpe/jwt-helper.service';

@Injectable()
export class AuthService {

    private user = new BehaviorSubject<User>({});

    constructor(private http: HttpClient,
        private jwtHelper: JwtHelperService,
        private cache: CacheService) { }

    public getCurrentUser() {
        return this.user.asObservable()
            .pipe(map(user => {
                if (!user.hasOwnProperty('isActive')) {
                    let cacheUser = this.cache.getCurrentUser();
                    if(cacheUser)
                    {
                        user = cacheUser;
                        return user;
                    } else {
                        user = new User;
                        user.isActive = false;

                        return user;
                    }
                }
                return user;
            }));
    }

    public login(model: Login): Observable<ResponseModel<User>> {
        return this.http.post<ResponseModel<User>>('api/user/login', model)
            .pipe(tap(response => {
                if (response.content) {
                    response.content.isActive = true;

                    this.user.next(response.content);
                    this.cache.setCurrentUser(response.content);
                    this.jwtHelper.setJwtToken(response.token);
                }
            }))
            .pipe(catchError(this.handleError<ResponseModel<User>>('login')));
    }

    public logout(userId: string): Observable<ResponseModel<string>> {
        const headers= new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Authorization', `bearer ${this.jwtHelper.getJwtToken()}`);
        const options = { headers: headers };

        let logoutRequest = new Logout(userId)

        return this.http.post<ResponseModel<string>>('api/user/logout', logoutRequest, options)
            .pipe(tap(response => {
                if (response.isSuccessful){
                    this.jwtHelper.removeJwtToken();
                    this.cache.removeCurrentUser();
                    let deactiveUser = new User;
                    deactiveUser.isActive = false;
                    this.user.next(deactiveUser);
                }
            }))
            .pipe(catchError(this.handleError<ResponseModel<string>>('logout')));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
