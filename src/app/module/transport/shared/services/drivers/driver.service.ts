import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SpinnerStateService } from 'src/app/shared/component';
import { Driver } from 'src/app/shared/utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  public getAllDrivers$: Subject<Driver[]> = new Subject<Driver[]>();

  constructor(
    private readonly _httpClient: HttpClient,
    private _sppinerService: SpinnerStateService
  ) {}

  public getAllDrivers() {
    this._sppinerService.setStateBehaviorSpinner(true);
    return this._httpClient.get<Driver[]>(
      `${environment.apiUrl}api/transport/driver`
    );
  }
}
