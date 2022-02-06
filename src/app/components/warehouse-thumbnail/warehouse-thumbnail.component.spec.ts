import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseThumbnailComponent } from './warehouse-thumbnail.component';

describe('WarehouseThumbnailComponent', () => {
  let component: WarehouseThumbnailComponent;
  let fixture: ComponentFixture<WarehouseThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
