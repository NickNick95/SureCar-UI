import { Overlay } from '@angular/cdk/overlay';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { Vehicle } from 'src/app/models/vehicle.model';
import { Warehouse } from 'src/app/models/warehouse.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CacheService } from 'src/app/services/cache/cache.service';
import { JwtHelperService } from 'src/app/services/jwtHelpe/jwt-helper.service';

import { CarThumbnailComponent } from './car-thumbnail.component';

describe('CarThumbnailComponent', () => {
    let component: CarThumbnailComponent;
    let fixture: ComponentFixture<CarThumbnailComponent>;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpClientTestingModule],
        declarations: [CarThumbnailComponent],
        providers: [AuthService, JwtHelperService, CacheService, MatDialog, Overlay, MatDialogModule]
    }).compileComponents());

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CarThumbnailComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CarThumbnailComponent);
        component = fixture.componentInstance;
        const today = new Date();
        const vehicle : Vehicle = {
            id: 1,
            dateAdded: today,
            licensed: true,
            make: 'Toyota',
            model: 'Rav4',
            price: 2345,
            yearModel: 2020
        };
        const warehouse : Warehouse = {
            id: 1,
            name: 'Warehouse A',
            car: {
                id:1,
                location: 'Test location',
                vehicles: [
                    vehicle
                ]
            },
            location: {
                latitude: 1234,
                longitude: 134
            }
        }

        component.warehouse = warehouse;
        component.isAdministrator = false;
        fixture.detectChanges();
    });

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
