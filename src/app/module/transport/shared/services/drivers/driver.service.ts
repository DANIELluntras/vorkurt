import { Injectable } from '@angular/core';
import { DriverResponse } from '../../backend/contractors/driver-response';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  public getAllDrivers$: Subject<DriverResponse[]> = new Subject<
    DriverResponse[]
  >();

  constructor(private readonly _httpClient: HttpClient) {}

  public getAllDrivers() {
    return this._httpClient.get<DriverResponse[]>(
      `${environment.apiUrl}api/transport/driver`
    );
  }
}
