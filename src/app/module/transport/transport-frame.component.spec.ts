import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportFrameComponent } from './transport-frame.component';

describe('TransportComponent', () => {
  let component: TransportFrameComponent;
  let fixture: ComponentFixture<TransportFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransportFrameComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
