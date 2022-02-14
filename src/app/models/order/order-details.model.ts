import { Vehicle } from "../vehicle.model";

export class OrderDetails {
    public id: number;
    public userId: string;
    public userName: string;
    public phoneNumber: string;
    public email: string;
    public vehicles: Vehicle[]
}