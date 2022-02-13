import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { WarehouseService } from './warehouse.service';

describe('WarehouseService', () => {
    let service: WarehouseService;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [WarehouseService]
    }));

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WarehouseService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
