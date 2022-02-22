import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameRepositoryComponent } from './user-name-repository.component';

describe('UserNameRepositoryComponent', () => {
  let component: UserNameRepositoryComponent;
  let fixture: ComponentFixture<UserNameRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserNameRepositoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNameRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
