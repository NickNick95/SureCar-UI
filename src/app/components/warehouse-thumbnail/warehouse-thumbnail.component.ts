import { Component, Input, OnInit } from '@angular/core';
import { Wherehouse } from 'src/app/models/warehouse';

@Component({
    selector: 'warehouse-thumbnail',
    templateUrl: './warehouse-thumbnail.component.html',
    styleUrls: ['./warehouse-thumbnail.component.scss']
})
export class WarehouseThumbnailComponent implements OnInit {

    @Input() warehouse: Wherehouse;

    constructor() { }

    ngOnInit(): void {
        this.warehouse.car.vehicles.length
    }

}
