import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideArtifactsComponent } from './right-side-artifacts.component';

describe('RightSideArtifactsComponent', () => {
  let component: RightSideArtifactsComponent;
  let fixture: ComponentFixture<RightSideArtifactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightSideArtifactsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideArtifactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
