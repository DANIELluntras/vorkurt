import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingTransportationComponent } from './shipping-transportation.component';

describe('ShippingTranspotationComponent', () => {
  let component: ShippingTransportationComponent;
  let fixture: ComponentFixture<ShippingTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippingTransportationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
