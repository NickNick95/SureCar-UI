import { Car } from './car.model';
import { Location } from './location.model';

export class Warehouse {
    public id: number;
    public name: string;
    public location: Location;
    public car: Car;
}