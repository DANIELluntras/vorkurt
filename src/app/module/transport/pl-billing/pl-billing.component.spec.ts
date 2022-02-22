import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlBillingComponent } from './pl-billing.component';

describe('PlBillingComponent', () => {
  let component: PlBillingComponent;
  let fixture: ComponentFixture<PlBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlBillingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
