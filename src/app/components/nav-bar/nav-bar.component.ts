import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service.service';
import { CartListComponent } from '../cart/cart-list/cart-list.component';


@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    public totalItem : number = 0;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private cartService: CartService,
        public dialog: MatDialog,) { }

    ngOnInit(): void {
        this.cartService.getCarts()
        .subscribe(res=>{
          this.totalItem = res.length;
        })
    }

    public openCars() {
        console.log("work");
        this.router.navigate(['']);
    }

    public openCart() {
        this.dialog.open(CartListComponent);
    }
}
