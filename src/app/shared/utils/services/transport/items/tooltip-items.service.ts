import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TooltipItemsService {
  private _dataTooltip: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  dataSend$ = this._dataTooltip.asObservable();

  constructor() {}

  dataNextTooltip(data: string) {
    this._dataTooltip.next(data);
  }
}
