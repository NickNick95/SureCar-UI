import { Component, Input, OnInit } from '@angular/core';
import { Warehouse } from 'src/app/models/warehouse.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CarDetailsComponent } from '../car-details/car-details.component';
import { CartService } from 'src/app/services/cart/cart.service.service';
import { Vehicle } from 'src/app/models/vehicle.model';
import { CarItem } from 'src/app/models/cartItem.model';

@Component({
    selector: 'car-thumbnail',
    templateUrl: './car-thumbnail.component.html',
    styleUrls: ['./car-thumbnail.component.scss']
})
export class CarThumbnailComponent implements OnInit {

    @Input() warehouse: Warehouse;
    @Input() vehicle: Vehicle;

    constructor(public dialog: MatDialog,
        private cartService: CartService) { }

    ngOnInit(): void {
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
