import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { JwtHelperService } from '../jwtHelpe/jwt-helper.service';
import { CacheService } from '../cache/cache.service';

describe('AuthService', () => {
    let service: AuthService;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [AuthService, JwtHelperService, CacheService]
    }));

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
