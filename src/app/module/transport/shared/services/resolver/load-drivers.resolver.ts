import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DriverService } from '../drivers/driver.service';
import { SpinnerStateService } from '../../../../../shared/component';

@Injectable({
  providedIn: 'root',
})
export class LoadDriversResolver implements Resolve<any> {
  public constructor(
    private readonly _driverService: DriverService,
    private readonly _spinnerStateService: SpinnerStateService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    this._spinnerStateService.setStateBehaviorSpinner(true);
    return this._driverService.getAllDrivers();
  }
}
