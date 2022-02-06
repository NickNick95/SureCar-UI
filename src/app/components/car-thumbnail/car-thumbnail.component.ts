import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';
import { Wherehouse } from 'src/app/models/warehouse';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CarDetailsComponent } from '../car-details/car-details.component';

@Component({
    selector: 'car-thumbnail',
    templateUrl: './car-thumbnail.component.html',
    styleUrls: ['./car-thumbnail.component.scss']
})
export class CarThumbnailComponent implements OnInit {

    @Input() warehouse: Wherehouse;
    @Input() vehicle: Vehicle;

    constructor(public dialog: MatDialog,) { }

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

}
