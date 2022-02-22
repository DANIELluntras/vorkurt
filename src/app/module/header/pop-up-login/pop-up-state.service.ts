import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface IOffsetPopUp {
  offsetX: number;
  offsetY: number;
}

@Injectable({
  providedIn: 'root',
})
export class PopUpStateService {
  private _statePopUpLogin: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  statePopUp$ = this._statePopUpLogin.asObservable();

  private _coordinates: Subject<IOffsetPopUp> = new Subject<IOffsetPopUp>();
  coordinates$ = this._coordinates.asObservable();

  coordinates(value: IOffsetPopUp) {
    this._coordinates.next(value);
  }

  statePopLogin(value: boolean) {
    this._statePopUpLogin.next(value);
  }
}
