import { Component, Input, OnInit } from '@angular/core';
import { Warehouse } from 'src/app/models/warehouse.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CarDetailsComponent } from '../car-details/car-details.component';
import { CartService } from 'src/app/services/cart/cart.service.service';
import { Vehicle } from 'src/app/models/vehicle.model';
import { CarItem } from 'src/app/models/cartItem.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'car-thumbnail',
    templateUrl: './car-thumbnail.component.html',
    styleUrls: ['./car-thumbnail.component.scss']
})
export class CarThumbnailComponent implements OnInit {

    @Input() warehouse: Warehouse;
    @Input() vehicle: Vehicle;

    public isAdministrator: boolean = false;

    constructor(public dialog: MatDialog,
        private cartService: CartService,
        private auth: AuthService) { }

    ngOnInit(): void {

        this.auth.getCurrentUser()
            .subscribe(user => {
                if (!user.hasOwnProperty('isActive'))
                    return;

                if (user?.isActive && user?.id) {
                    this.auth.checkIsAdministratorUser(user.id)
                        .subscribe(result => {
                            if (result?.isSuccessful)
                                this.isAdministrator = result?.content.flag;
                        });
                } else {
                    this.isAdministrator = false;
                }
            })
    }

    public openDetails() {
        let config = new MatDialogConfig();
        config.data = {
            title: `${this.vehicle.make} ${this.vehicle.model}`,
            warehouse: this.warehouse,
            vehicle: this.vehicle
        }

        this.dialog.open(CarDetailsComponent, config);
    }

    public addToCart() {
        let cartItem: CarItem = {
            warehouseName: this.warehouse.name,
            vehicleId: this.vehicle.id,
            price: this.vehicle.price,
            title: `${this.vehicle.make} ${this.vehicle.model}`,
            year: this.vehicle.price
        }
        this.cartService.addtoCart(cartItem);
    }
}
