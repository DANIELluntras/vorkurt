import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITimer } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  timerArray: Array<ITimer> = new Array<ITimer>();
  private _counterData: BehaviorSubject<ITimer[]> = new BehaviorSubject<
    ITimer[]
  >(new Array<ITimer>());
  counterData$ = this._counterData.asObservable();

  constructor() {}

  sendCounterData(timer: ITimer) {
    timer.id = this.timerArray.length === 0 ? 1 : this.timerArray.length + 1;
    this.timerArray.push(timer);
    this._counterData.next(this.timerArray);
  }
}
