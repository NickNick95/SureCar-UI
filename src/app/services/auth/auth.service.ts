import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/models/general/response.model';
import { User } from 'src/app/models/user.model';

export class AuthService {


    private getOptions() {
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return options;
    }
}
