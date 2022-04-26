import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DriverService } from '../drivers/driver.service';

@Injectable({
  providedIn: 'root',
})
export class LoadDriversResolver implements Resolve<any> {
  public constructor(private readonly _driverService: DriverService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this._driverService.getAllDrivers();
  }
}
