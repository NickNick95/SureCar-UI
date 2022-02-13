import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarehouseService } from 'src/app/services/warehouse/warehouse.service';

import { CarListComponent } from './car-list.component';

describe('CarListComponent', () => {
    let component: CarListComponent;
    let fixture: ComponentFixture<CarListComponent>;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [CarListComponent],
        providers: [WarehouseService]
    }).compileComponents());

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CarListComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CarListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
