import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnAreaTextComponent } from './column-area-text.component';

describe('ColumnAreaTextComponent', () => {
  let component: ColumnAreaTextComponent;
  let fixture: ComponentFixture<ColumnAreaTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnAreaTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnAreaTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
