import { Vehicle } from "./vehicle.model";
import { Warehouse } from "./warehouse.model";

export class CarItem {
    public id?: number;
    public vehicleId: number;
    public warehouseName: string;
    public title: string;
    public year: number;
    public price: number;
}