import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterActivityComponent } from './center-activity.component';

describe('CenterActivityComponent', () => {
  let component: CenterActivityComponent;
  let fixture: ComponentFixture<CenterActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CenterActivityComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
