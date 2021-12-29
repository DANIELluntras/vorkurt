import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getVelocityEmail } from '../../config/global/generator';
import { AuthService } from '../../shared/utils/services';
import { Router } from '@angular/router';
import { SpinnerStateService } from '../../shared/component';

@Component({
  selector: 'elix-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _sppinerService: SpinnerStateService
  ) {}

  ngOnInit(): void {}

  forgotPassword(model: NgForm) {
    if (getVelocityEmail(model)) {
      this._sppinerService.setStateBehaviorSpinner(true);
      this._authService
        .forgotPassword(model.value.email)
        .then((resp) => {
          if (resp.code !== 'auth/user-not-found')
            this._router.navigate(['/auth/l']);
        })
        .catch((err) => console.error(err))
        .finally(() => this._sppinerService.setStateBehaviorSpinner(false));
    }
  }

  getVelocityEmail(model: NgForm) {
    return getVelocityEmail(model);
  }
}
