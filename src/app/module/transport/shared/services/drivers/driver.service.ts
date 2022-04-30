import { Injectable } from '@angular/core';
import { DriverResponse } from '../../backend/contractors/driver-response';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { SpinnerStateService } from '../../../../../shared/component';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  public getAllDrivers$: Subject<DriverResponse[]> = new Subject<
    DriverResponse[]
  >();

  constructor(
    private readonly _httpClient: HttpClient,
    private _sppinerService: SpinnerStateService
  ) {}

  public getAllDrivers() {
    this._sppinerService.setStateBehaviorSpinner(true);
    return this._httpClient.get<DriverResponse[]>(
      `${environment.apiUrl}api/transport/driver`
    );
  }
}
