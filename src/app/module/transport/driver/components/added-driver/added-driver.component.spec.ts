import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedDriverComponent } from './added-driver.component';

describe('AddedDriverComponent', () => {
  let component: AddedDriverComponent;
  let fixture: ComponentFixture<AddedDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddedDriverComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
