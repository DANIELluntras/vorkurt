import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from '../config/auth/firebase';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let h1: HTMLElement;
  let button: HTMLElement;
  let userName: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [
        AngularFireModule.initializeApp(firebaseConfig),
        BrowserDynamicTestingModule,
        RouterModule.forRoot([]),
        FormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
    button = fixture.nativeElement.querySelector('button');
    userName = fixture.nativeElement.querySelector('.elixir-username');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Be title', function () {
    expect(h1.textContent).toContain(!component.logedIn ? 'Create' : 'Logged');
  });

  it('should be label button', function () {
    expect(button.textContent).toContain(
      component.logedIn ? 'Sign Up' : 'Sign In'
    );
  });

  it('should Be Username', function () {
    expect(userName.textContent).toContain('Username');
  });

  it('should test authenticate', function () {});
});
