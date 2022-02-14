import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ResponseMessage } from 'src/app/models/general/response-message.model';
import { ResponseModel } from 'src/app/models/general/response.model';
import { OrderDetails } from 'src/app/models/order/order-details.model';
import { Order } from 'src/app/models/order/order.model';
import { BaseService } from '../base-service';
import { JwtHelperService } from '../jwtHelpe/jwt-helper.service';

@Injectable()
export class OrderService extends BaseService {

    constructor(private http: HttpClient,
        private jwtHelper: JwtHelperService) {
        super();
    }

    public createOrder(order: Order): Observable<ResponseModel<ResponseMessage>> {
        let token = this.jwtHelper.getJwtToken();
        if (!token)
            return of();

        const headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Authorization', `bearer ${token}`);
        const options = { headers: headers };

        return this.http.post<ResponseModel<ResponseMessage>>('api/order', order, options)
            .pipe(catchError(this.handleError<ResponseModel<ResponseMessage>>('create order')));
    }

    public getAll(): Observable<ResponseModel<OrderDetails[]>> {
        let token = this.jwtHelper.getJwtToken();
        if (!token)
            return of();

        const headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Authorization', `bearer ${token}`);
        const options = { headers: headers };

        return this.http.get<ResponseModel<OrderDetails[]>>('api/order', options)
            .pipe(catchError(this.handleError<ResponseModel<OrderDetails[]>>('create order')));
    }
}
