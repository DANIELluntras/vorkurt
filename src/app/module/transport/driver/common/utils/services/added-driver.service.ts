import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from '../../../../../../shared/utils/interfaces';
import { environment } from '../../../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddedDriverService {
  constructor(private readonly _httpClient: HttpClient) {}

  public addedDriver(dataDriver: Driver) {
    return this._httpClient.post<Driver>(
      `${environment.apiUrl}api/transport/driver`,
      dataDriver
    );
  }
}
