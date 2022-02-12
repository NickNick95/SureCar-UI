import { Component, Input, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/models/order/order-details.model';

@Component({
    selector: 'order-thumbnail',
    templateUrl: './order-thumbnail.component.html',
    styleUrls: ['./order-thumbnail.component.scss']
})
export class OrderThumbnailComponent implements OnInit {

    @Input() orderDetails: OrderDetails;

    public title: string;

    constructor() { }

    ngOnInit(): void {
    }
}
