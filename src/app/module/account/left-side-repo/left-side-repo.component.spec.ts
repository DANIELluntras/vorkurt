import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideRepoComponent } from './left-side-repo.component';

describe('LeftSideRepoComponent', () => {
  let component: LeftSideRepoComponent;
  let fixture: ComponentFixture<LeftSideRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftSideRepoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
