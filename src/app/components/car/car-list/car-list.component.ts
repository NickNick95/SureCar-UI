import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResponseModel } from 'src/app/models/general/response.model';
import { Warehouse } from 'src/app/models/warehouse.model';
import { WarehouseService } from 'src/app/services/warehouse/warehouse.service';

@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {

    public warehouses: Warehouse[];

    constructor(private warehouseService: WarehouseService) { }

    ngOnInit(): void {
        this.warehouseService.getAll().subscribe((response: ResponseModel<Warehouse[]>) => {
            if (response.content) {
                this.warehouses = response.content;
            }
        });
    }

}
