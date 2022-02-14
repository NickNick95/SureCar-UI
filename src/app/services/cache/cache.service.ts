import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user.model';

@Injectable()
export class CacheService {

    private userKey = "user";

    constructor() { }

    public setCurrentUser(user: User) {
        if (user)
            localStorage.setItem(this.userKey, JSON.stringify(user))
    }

    public getCurrentUser() {
        let data = localStorage.getItem(this.userKey);
        if (data)
        {
            let user : User = JSON.parse(data);

            return user;
        }

        return null;
    }

    public removeCurrentUser(){
        localStorage.removeItem(this.userKey);
    }
}
