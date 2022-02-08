import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CarItem } from 'src/app/models/cartItem.model';
import { CartService } from 'src/app/services/cart/cart.service.service';

@Component({
    selector: 'cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

    public cartItems: CarItem[] = [];
    public grandTotal !: number;
    public isCartEmpty: boolean;

    constructor(public dialogRef: MatDialogRef<CartListComponent>,
        private cartService: CartService) { }

    ngOnInit(): void {
        this.cartService.getCarts()
            .subscribe(res => {
                if (res) {
                    this.cartItems = res;
                    this.isCartEmpty = res.length === 0;
                    this.grandTotal = this.cartService.getTotalPrice();
                }
            })
    }

    public clearAll() {
        this.cartService.removeAllCart();
    }

    public submit(){

    }

}
