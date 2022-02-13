import { Component, Input, OnInit } from '@angular/core';
import { CarItem } from 'src/app/models/cartItem.model';
import { CartService } from 'src/app/services/cart/cart.service.service';

@Component({
    selector: 'cart-thumbnail',
    templateUrl: './cart-thumbnail.component.html',
    styleUrls: ['./cart-thumbnail.component.scss'],
    providers: [CartService]
})
export class CartThumbnailComponent implements OnInit {

    @Input() cartItem: CarItem;

    constructor(private cartService: CartService) { }

    ngOnInit(): void {}

    public removeById(id: number) {
        this.cartService.removeCartItem(id);
    }
}
