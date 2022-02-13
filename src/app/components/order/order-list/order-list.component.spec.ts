import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CacheService } from 'src/app/services/cache/cache.service';
import { JwtHelperService } from 'src/app/services/jwtHelpe/jwt-helper.service';
import { OrderService } from 'src/app/services/order/order.service';

import { OrderListComponent } from './order-list.component';

describe('OrderListComponent', () => {
    let component: OrderListComponent;
    let fixture: ComponentFixture<OrderListComponent>;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [OrderListComponent],
        providers: [OrderService, JwtHelperService, CacheService]
    }).compileComponents());

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OrderListComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
