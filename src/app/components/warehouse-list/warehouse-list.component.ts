import { Component, OnInit } from '@angular/core';
import { ResponseModel } from 'src/app/models/general/response.model';
import { Wherehouse } from 'src/app/models/warehouse';
import { WarehouseService } from 'src/app/services/warehouse/warehouse.service.service';



@Component({
    selector: 'warehouse-list',
    templateUrl: './warehouse-list.component.html',
    styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent implements OnInit {

    public warehouses: Wherehouse[];

    constructor(private warehouseService: WarehouseService) { }

    ngOnInit(): void {
        this.warehouseService.getAll().subscribe((response: ResponseModel<Wherehouse[]>) => {
            if (response.content) {
                this.warehouses = response.content;
            }
        });
    }
}