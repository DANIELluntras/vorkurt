import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFrameSharedComponent } from './all-frame-shared.component';

describe('AllFrameSharedComponent', () => {
  let component: AllFrameSharedComponent;
  let fixture: ComponentFixture<AllFrameSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllFrameSharedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFrameSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
