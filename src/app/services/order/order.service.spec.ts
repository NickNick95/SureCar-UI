import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '../auth/auth.service';
import { CacheService } from '../cache/cache.service';
import { JwtHelperService } from '../jwtHelpe/jwt-helper.service';

import { OrderService } from './order.service';

describe('OrderService', () => {
    let service: OrderService;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [OrderService, JwtHelperService, CacheService]
    }));

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(OrderService);
    });

    it('should be created', () => {
        const service: OrderService = TestBed.get(OrderService);
        expect(service).toBeTruthy();
       });

       it('should have getAll function', () => {
        const service: OrderService = TestBed.get(OrderService);
        expect(service.getAll()).toBeTruthy();
       });
});
