import { Component, OnInit } from '@angular/core';
import { ResponseModel } from 'src/app/models/general/response.model';
import { Wherehouse } from 'src/app/models/warehouse';
import { WarehouseService } from 'src/app/services/warehouse/warehouse.service.service';

@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

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
