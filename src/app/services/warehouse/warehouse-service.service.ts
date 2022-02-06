import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WarehouseServiceService {

    constructor(private http: HttpClient) { }

    public getAll() {
        return this.http.get('/api/warehouse');
    }
}
