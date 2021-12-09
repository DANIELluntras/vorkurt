import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnIconActionComponent } from './column-icon-action.component';

describe('ColumnIconActionComponent', () => {
  let component: ColumnIconActionComponent;
  let fixture: ComponentFixture<ColumnIconActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnIconActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnIconActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
