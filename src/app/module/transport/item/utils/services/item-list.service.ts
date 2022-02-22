import { Injectable } from '@angular/core';
import { INewItemTypes } from '../interfaces';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LocalStorageDataService } from '../../../../../shared/utils/services';

@Injectable({
  providedIn: 'root',
})
export class ItemListService {
  user = JSON.parse(this._localStorage.getResource('user'));
  private _dataList: BehaviorSubject<INewItemTypes[]> = new BehaviorSubject<
    INewItemTypes[]
  >(new Array<INewItemTypes>());
  dataComming$ = this._dataList.asObservable();

  constructor(
    private _db: AngularFirestore,
    private _localStorage: LocalStorageDataService
  ) {}

  retriveData(value: any) {
    this._dataList.next(value);
  }

  updateItem(collection: string, document: string, data: any) {
    this._db
      .collection('/users')
      .doc(this.user.user.email)
      .collection(collection)
      .doc(document)
      .update(data);
  }

  delete(collection: string, document: string) {
    this._db
      .collection('/users')
      .doc(this.user.user.email)
      .collection(collection)
      .doc(document)
      .delete();
  }
}
