import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnNumberComponent } from './column-number.component';

describe('ColumnNumberComponent', () => {
  let component: ColumnNumberComponent;
  let fixture: ComponentFixture<ColumnNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnNumberComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
