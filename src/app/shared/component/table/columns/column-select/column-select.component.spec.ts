import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnSelectComponent } from './column-select.component';

describe('ColumnSelectComponent', () => {
  let component: ColumnSelectComponent;
  let fixture: ComponentFixture<ColumnSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
