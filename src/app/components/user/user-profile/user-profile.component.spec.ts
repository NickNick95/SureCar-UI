import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CacheService } from 'src/app/services/cache/cache.service';
import { JwtHelperService } from 'src/app/services/jwtHelpe/jwt-helper.service';

import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
    let component: UserProfileComponent;
    let fixture: ComponentFixture<UserProfileComponent>;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpClientTestingModule],
        declarations: [UserProfileComponent],
        providers: [AuthService, JwtHelperService, CacheService]
    }).compileComponents());

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserProfileComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
