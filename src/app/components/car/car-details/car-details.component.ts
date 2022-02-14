import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-car-details',
    templateUrl: './car-details.component.html',
    styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {

    public zoom = 12
    public center: any
    public options: any = {
        mapTypeId: 'satellite',
        disableDoubleClickZoom: true,
        maxZoom: 15,
        minZoom: 8,
    }

    public lat: any;
    public lng: any;

    public marker: any;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
        this.marker = {
            position: {
                lat: this.data.warehouse.location.latitude,
                lng: this.data.warehouse.location.latitude
            },
            label: {
                color: 'red',
                text: `${this.data.vehicle.make} ${this.data.vehicle.model}`,
            },
            title: `${this.data.vehicle.make} ${this.data.vehicle.model}`,
        }

        navigator.geolocation.getCurrentPosition((position) => {
            this.center = {
                lat: this.data.warehouse.location.latitude,
                lng: this.data.warehouse.location.latitude,
            }
        })
    }
}
