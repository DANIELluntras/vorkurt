import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningFreightComponent } from './planning-freight.component';

describe('PlanningFreightComponent', () => {
  let component: PlanningFreightComponent;
  let fixture: ComponentFixture<PlanningFreightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningFreightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
