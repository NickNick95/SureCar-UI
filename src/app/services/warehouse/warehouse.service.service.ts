import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/models/general/response.model';
import { Wherehouse } from 'src/app/models/warehouse';

@Injectable()
export class WarehouseService {

    constructor(private http: HttpClient) { }

    public getAll() : Observable<ResponseModel<Wherehouse[]>> {
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.get<ResponseModel<Wherehouse[]>>('api/warehouse', options);
    }
}
