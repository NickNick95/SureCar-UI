import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CacheService } from 'src/app/services/cache/cache.service';
import { JwtHelperService } from 'src/app/services/jwtHelpe/jwt-helper.service';

import { RegistrationComponent } from './registrationcomponent';

describe('RegisterComponent', () => {
    let component: RegistrationComponent;
    let fixture: ComponentFixture<RegistrationComponent>;


    beforeEach(() => TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpClientTestingModule],
        declarations: [RegistrationComponent],
        providers: [AuthService, JwtHelperService, CacheService, FormBuilder]
    }).compileComponents());

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RegistrationComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegistrationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
