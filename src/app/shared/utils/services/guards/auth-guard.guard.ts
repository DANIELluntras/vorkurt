import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from '../user/user-service';
import { SpinnerStateService } from '../../../component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private _firebaseAuth: AngularFireAuth,
    private _sppinerService: SpinnerStateService,
    private _userService: UserService,
    private _route: Router
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const user = await this._firebaseAuth.currentUser;
    let isAuthenticated = user ? true : false;
    const dataFromLocalStorage = this._userService.getUserLoggedIn();

    if (dataFromLocalStorage) {
      isAuthenticated = true;
    }

    if (!isAuthenticated) {
      console.warn('You must be authenticated in order to access this page.');

      await this._route.navigate(['/auth/l']);
    }
    this._sppinerService.setStateBehaviorSpinner(false);

    return isAuthenticated;
  }
}
