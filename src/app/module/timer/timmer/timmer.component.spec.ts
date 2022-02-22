import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimmerComponent } from './timmer.component';

describe('TimmerComponent', () => {
  let component: TimmerComponent;
  let fixture: ComponentFixture<TimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimmerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
