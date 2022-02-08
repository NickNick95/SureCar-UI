import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/models/general/response.model';
import { Warehouse } from 'src/app/models/warehouse.model';

@Injectable()
export class WarehouseService {

    constructor(private http: HttpClient) { }

    public getAll() : Observable<ResponseModel<Warehouse[]>> {
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.get<ResponseModel<Warehouse[]>>('api/warehouse', options);
    }
}
