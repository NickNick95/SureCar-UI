import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarItem } from 'src/app/models/cartItem.model';

export class CartService {

    public cartItemList: CarItem[] = []
    public productList = new BehaviorSubject<CarItem[]>([]);

    constructor() { }

    public getCarts() {
        return this.productList.asObservable();
    }

    public addtoCart(item: CarItem) {
        let cartItemExist = this.cartItemList.find(c => c.vehicleId === item.vehicleId);
        if (!cartItemExist) {
            this.cartItemList.push(item);
            this.productList.next(this.cartItemList);
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
        this.productList.next(this.cartItemList);
    }
    removeAllCart() {
        this.cartItemList = []
        this.productList.next(this.cartItemList);
    }
}
