import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartThumbnailComponent } from './cart-thumbnail.component';

describe('CartThumbnailComponent', () => {
    let component: CartThumbnailComponent;
    let fixture: ComponentFixture<CartThumbnailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CartThumbnailComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CartThumbnailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
