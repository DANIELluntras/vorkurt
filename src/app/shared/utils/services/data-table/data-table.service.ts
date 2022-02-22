import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataTableService {
  private _dataStoreBehavior: BehaviorSubject<any> = new BehaviorSubject<any>(
    []
  );
  dataStore$ = this._dataStoreBehavior.asObservable();

  constructor(private _httpClient: HttpClient) {}

  dataStoreBehavior(data: string) {
    return this._httpClient.get(data).subscribe((resp) => {
      this._dataStoreBehavior.next(resp);
    });
  }
}
