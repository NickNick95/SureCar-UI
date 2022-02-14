import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CacheService } from 'src/app/services/cache/cache.service';
import { CryptoService } from 'src/app/services/crypto/crypto.service';
import { JwtHelperService } from 'src/app/services/jwtHelpe/jwt-helper.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpClientTestingModule],
        declarations: [UserProfileComponent],
        providers: [AuthService, JwtHelperService, CacheService, CryptoService, FormBuilder]
    }).compileComponents());

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
