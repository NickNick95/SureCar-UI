import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailValidator } from '@angular/forms';
import { OrderDetails } from 'src/app/models/order/order-details.model';

import { OrderThumbnailComponent } from './order-thumbnail.component';

describe('OrderThumbnailComponent', () => {
    let component: OrderThumbnailComponent;
    let fixture: ComponentFixture<OrderThumbnailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OrderThumbnailComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderThumbnailComponent);
        component = fixture.componentInstance;
        const today = new Date();
        const orderDetails : OrderDetails = {
            id: 1,
            email: 'email@gmail.com',
            phoneNumber: '023402304',
            userId: '1',
            userName: 'testName',
            vehicles: [ {
                id: 1,
                dateAdded: today,
                licensed: true,
                make: 'Toyota',
                model: 'Rav4',
                price: 2345,
                yearModel: 2020
            }]
        };
        component.orderDetails = orderDetails;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
