import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerVendorComponent } from './customer-vendor.component';

describe('CustomerVendorComponent', () => {
  let component: CustomerVendorComponent;
  let fixture: ComponentFixture<CustomerVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerVendorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
