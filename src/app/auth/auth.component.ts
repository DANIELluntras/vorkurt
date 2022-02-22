import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/utils/services';
import { Router } from '@angular/router';
import { SpinnerStateService } from '../shared/component/spinner/spinner-state.service';
import { getVelocityEmail } from '../config/global/generator';
import { ConnectionService } from '../shared/utils/services/firebase';
import firebase from 'firebase/compat';
import UserCredential = firebase.auth.UserCredential;

@Component({
  selector: 'elix-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isSignedIn = false;
  logedIn = true;
  feedback = { password: false, email: false };
  forgotPass: boolean = true;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _sppinerService: SpinnerStateService,
    private _connectionService: ConnectionService
  ) {}

  ngOnInit(): void {
    this._sppinerService.setStateBehaviorSpinner(false);

    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }

  onSubmit(form: NgForm) {
    this.feedback.password = false;
    this.feedback.email = false;
    try {
      if (getVelocityEmail(form)) {
        this._sppinerService.setStateBehaviorSpinner(true);
        if (this.logedIn) {
          this._authService
            .signInWithEmail(form.value)
            .then((resp: UserCredential | any) => {
              this._connectionService.createDB({ role: 'admin' }, resp);
            });
        } else {
          this._authService.signUp(form.value).catch((e) => {
            console.log(e);
            return e;
          });
        }
        form.reset();
      } else {
        this.feedback.email = true;
        this.feedback.password = true;
      }
    } catch (e) {
      console.log(e);
    }
  }

  changeSignIn() {
    this.logedIn = !this.logedIn;
  }

  forgotPassword(parameter: any) {
    if (parameter === 'route') this._router.navigate(['forgot_password']);
  }
}
