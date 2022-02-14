import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarItem } from 'src/app/models/cartItem.model';

@Injectable()
export class CartService {

    public cartItemList: CarItem[] = []
    public cartList = new BehaviorSubject<CarItem[]>([]);

    constructor() { }

    public getCarts() {
        return this.cartList.asObservable();
    }

    public addtoCart(item: CarItem) {
        let cartItemExist = this.cartItemList.find(c => c.vehicleId === item.vehicleId);
        if (!cartItemExist) {
            this.cartItemList.push(item);
            this.cartList.next(this.cartItemList);
            console.log(this.cartItemList)
        }
    }

    getTotalPrice(): number {
        let grandTotal = 0;
        this.cartItemList.map((c) => {
            grandTotal += c.price;
        })
        return grandTotal;
    }

    removeCartItem(id: number) {
        this.cartItemList.map((a: CarItem, index: number) => {
            if (id === a.vehicleId) {
                this.cartItemList.splice(index, 1);
            }
        })
        this.cartList.next(this.cartItemList);
    }
    removeAllCart() {
        this.cartItemList = []
        this.cartList.next(this.cartItemList);
    }
}
