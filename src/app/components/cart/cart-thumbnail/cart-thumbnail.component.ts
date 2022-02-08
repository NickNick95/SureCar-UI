import { Component, Input, OnInit } from '@angular/core';
import { CarItem } from 'src/app/models/cartItem.model';
import { Vehicle } from 'src/app/models/vehicle.model';
import { Warehouse } from 'src/app/models/warehouse.model';
import { CartService } from 'src/app/services/cart/cart.service.service';

@Component({
    selector: 'cart-thumbnail',
    templateUrl: './cart-thumbnail.component.html',
    styleUrls: ['./cart-thumbnail.component.scss']
})
export class CartThumbnailComponent implements OnInit {

    public title: string;

    @Input() cartItem: CarItem;;

    constructor(private cartService: CartService) { }

    ngOnInit(): void {
        this.title = 'Cart'
    }

    public removeById(id: number) {
        this.cartService.removeCartItem(id);
    }
}
