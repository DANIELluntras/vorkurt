import { Injectable }      from '@angular/core';
import { INewItemTypes }   from '../interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  private _dataList : BehaviorSubject<INewItemTypes[]> = new BehaviorSubject<INewItemTypes[]>(new Array<INewItemTypes>())
  
  constructor() { }
  
  dataComming$ = this._dataList.asObservable();
  
  retriveData(value: any){
    this._dataList.next(value)
  }
  
}
