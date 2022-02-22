import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerStateService {
  private _stateSpiner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor() {}

  getState$ = this._stateSpiner.asObservable();

  setStateBehaviorSpinner(value: boolean) {
    this._stateSpiner.next(value);
  }
}
