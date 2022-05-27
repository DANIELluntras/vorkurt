import {
  Component,
  ComponentRef,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { PopUpStateService } from './pop-up-state.service';
import { AuthService } from 'src/app/shared/utils/services';
import { UserService } from 'src/app/shared/utils/services/user/user-service';
import { SpinnerStateService } from 'src/app/shared/component';
import { OverlayPopUpService } from 'src/app/shared/utils/services';

@Component({
  selector: 'elix-pop-up-login',
  templateUrl: './pop-up-login.component.html',
  styleUrls: ['./pop-up-login.component.scss'],
})
export class PopUpLoginComponent implements OnInit {
  @ViewChild('popUp') popUp: ElementRef<HTMLElement>;
  dataUser: any;
  timerId: number;
  start: number = 0;
  timer: number = 0;

  @Input() componentRef: ComponentRef<PopUpLoginComponent>;

  constructor(
    private _popState: PopUpStateService,
    private _render: Renderer2,
    private _authService: AuthService,
    private _userService: UserService,
    private _spinnerService: SpinnerStateService,
    private _overlayConfig: OverlayPopUpService
  ) {}

  ngOnInit(): void {
    this.dataUser = this._userService.getUserLoggedIn();
    this.resumeTimeOut();
  }

  signOut() {
    this._popState.statePopLogin(false);
    this._spinnerService.setStateBehaviorSpinner(true);
    this._authService.logout();
    this._spinnerService.setStateBehaviorSpinner(false);
    this._overlayConfig.closeOverlay();
  }

  stopTimer() {
    window.setTimeout(() => {
      this.componentRef.destroy();
    });
  }

  pauseTimeout() {
    window.clearInterval(this.timer);
  }

  resumeTimeOut() {
    this.timer = window.setInterval(() => {
      if (this.start < 100) {
        this.start += 10;
      } else {
        this.pauseTimeout();
        this._overlayConfig.closeOverlay();
        return;
      }
    }, 500);
  }
}
