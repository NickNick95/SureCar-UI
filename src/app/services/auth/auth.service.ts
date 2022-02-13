import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, take, tap } from 'rxjs';
import { ResponseFlag } from 'src/app/models/general/response-flag.model';
import { ResponseMessage } from 'src/app/models/general/response-message.model';
import { ResponseModel } from 'src/app/models/general/response.model';
import { Login } from 'src/app/models/user/login.model';
import { Logout } from 'src/app/models/user/logout.model';
import { Registrate as Registration } from 'src/app/models/user/registrate.model';
import { User } from 'src/app/models/user/user.model';
import { BaseService } from '../base-service';
import { CacheService } from '../cache/cache.service';
import { JwtHelperService } from '../jwtHelpe/jwt-helper.service';

@Injectable()
export class AuthService extends BaseService {

    private user = new BehaviorSubject<User>({});

    constructor(private http: HttpClient,
        private jwtHelper: JwtHelperService,
        private cache: CacheService) {
        super();
    }

    public getCurrentUser() {
        return this.user.asObservable()
            .pipe(map(user => {
                if (!user.hasOwnProperty('isActive')) {
                    let cacheUser = this.cache.getCurrentUser();
                    if (cacheUser) {
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

    public registrate(model: Registration): Observable<ResponseModel<ResponseMessage>> {
        return this.http.post<ResponseModel<ResponseMessage>>('api/user/registration', model)
            .pipe(catchError(this.handleError<ResponseModel<ResponseMessage>>('Registrate')));
    }

    public login(model: Login): Observable<ResponseModel<User>> {
        return this.http.post<ResponseModel<User>>('api/user/login', model)
            .pipe(tap(response => {
                if (response?.content) {
                    response.content.isActive = true;

                    this.user.next(response.content);
                    this.cache.setCurrentUser(response.content);
                    this.jwtHelper.setJwtToken(response.token);
                }
            }))
            .pipe(catchError(this.handleError<ResponseModel<User>>('login')));
    }

    public logout(userId: string): Observable<ResponseModel<ResponseMessage>> {
        const headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Authorization', `bearer ${this.jwtHelper.getJwtToken()}`);
        const options = { headers: headers };

        let logoutRequest = new Logout(userId)

        return this.http.post<ResponseModel<ResponseMessage>>('api/user/logout', logoutRequest, options)
            .pipe(tap(response => {
                if (response.isSuccessful) {
                    this.jwtHelper.removeJwtToken();
                    this.cache.removeCurrentUser();
                    let deactiveUser = new User;
                    deactiveUser.isActive = false;
                    this.user.next(deactiveUser);
                }
            }))
            .pipe(catchError(this.handleError<ResponseModel<ResponseMessage>>('logout')));
    }

    public checkIsAdministratorUser(userId: string): Observable<ResponseModel<ResponseFlag>> {
        let token = this.jwtHelper.getJwtToken();
        if (!token)
            return of();

        const headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Authorization', `bearer ${token}`);
        const options = { headers: headers };

        return this.http.get<ResponseModel<ResponseFlag>>(`api/user/isadmin/${userId}`, options)
            .pipe(catchError(this.handleError<ResponseModel<ResponseFlag>>('Check Is Administrator User')));
    }
}
