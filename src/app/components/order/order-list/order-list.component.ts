import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OrderDetails } from 'src/app/models/order/order-details.model';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
    selector: 'order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

    public orderDetailsList: OrderDetails[];
    public isEmpty: boolean;

    constructor(private orderService: OrderService) { }

    ngOnInit(): void {
        this.orderService.getAll().subscribe(response => {
            if (response.content) {
                this.orderDetailsList = response.content;
                this.isEmpty = this.orderDetailsList.length === 0;
            }
        });
    }
}
