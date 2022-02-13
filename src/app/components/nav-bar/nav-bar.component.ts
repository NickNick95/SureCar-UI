import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service.service';
import { CartListComponent } from '../cart/cart-list/cart-list.component';
import { OrderListComponent } from '../order/order-list/order-list.component';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
    providers: [AuthService, Router, CartService, MatDialog]
})
export class NavBarComponent implements OnInit {

    public totalItem: number = 0;
    public currentUser: User;
    public isAuthorized : boolean = false;
    public isAdministrator: boolean = false;

    constructor(private auth: AuthService,
        private router: Router,
        private cartService: CartService,
        private dialog: MatDialog) { }

    ngOnInit(): void {
        this.cartService.getCarts()
            .subscribe(res => {
                this.totalItem = res.length;
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

                if (this.currentUser.id)
                this.auth.checkIsAdministratorUser(this.currentUser.id)
                .subscribe(result => {
                    if (result?.isSuccessful){
                        this.isAdministrator = result.content.flag;
                    }
                });
            })
    }

    public openCars() {
        console.log("work");
        this.router.navigate(['']);
    }

    public openCart() {
        this.dialog.open(CartListComponent);
    }

    public login() {
        this.router.navigate(['/login']);
    }

    public openProfile(){
        this.router.navigate(['/profile']);
    }

    public openOrderList(){
        this.dialog.open(OrderListComponent);
    }
}
