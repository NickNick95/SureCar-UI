import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CarItem } from 'src/app/models/cartItem.model';
import { Order } from 'src/app/models/order/order.model';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
    selector: 'cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

    public cartItems: CarItem[] = [];
    public grandTotal !: number;
    public isCartEmpty: boolean;
    public isAuthorized: boolean = false;
    public currentUser: User;

    constructor(public dialogRef: MatDialogRef<CartListComponent>,
        private cartService: CartService,
        private auth: AuthService,
        private orderService: OrderService) { }

    ngOnInit(): void {
        this.cartService.getCarts()
            .subscribe(res => {
                if (res) {
                    this.cartItems = res;
                    this.isCartEmpty = res.length === 0;
                    this.grandTotal = this.cartService.getTotalPrice();
                }
            })

        this.auth.getCurrentUser()
            .subscribe(user => {
                if (!user.hasOwnProperty('isActive'))
                    return;

                if (user.isActive) {
                    this.isAuthorized = user.isActive;
                    this.currentUser = user;
                } else {
                    this.isAuthorized = false;
                }
            })
    }

    public clearAll() {
        this.cartService.removeAllCart();
    }

    public submit() {
        if (this.cartItems && this.currentUser?.id) {
            let order = new Order();
            order.vehicleIds = this.cartItems.map(c => c.vehicleId);
            order.userId = this.currentUser.id
            this.orderService.createOrder(order).subscribe(result => {
                if (result.isSuccessful) {
                    this.dialogRef.close();
                    this.cartService.removeAllCart();
                }
            });
        }
    }
}