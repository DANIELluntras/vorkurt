import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNewRepoComponent } from './header-new-repo.component';

describe('HeaderNewRepoComponent', () => {
  let component: HeaderNewRepoComponent;
  let fixture: ComponentFixture<HeaderNewRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderNewRepoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNewRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
