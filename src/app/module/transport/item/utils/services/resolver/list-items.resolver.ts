import { Injectable, OnDestroy } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';
import { ConnectionService } from '../../../../../../shared/utils/services/firebase';
import { ItemListService } from '../item-list.service';
import { INewItemTypes } from '../../interfaces';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LocalStorageDataService } from '../../../../../../shared/utils/services';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListItemsResolver implements Resolve<boolean>, OnDestroy {
  private _unSubscribe: Subject<any> = new Subject();

  constructor(
    private _firebase: ConnectionService,
    private _listItem: ItemListService,
    private _db: AngularFirestore,
    private _localStoarage: LocalStorageDataService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this._firebase
      .allDateTwoColection('users', 'item_new')
      .snapshotChanges()
      .pipe(
        takeUntil(this._unSubscribe),
        map((changeData) =>
          changeData.map((c) => {
            let a = c.payload.doc.data();
            a.uuid = c.payload.doc.id;
            return a as INewItemTypes;
          })
        )
      )
      .subscribe((data) => this._listItem.retriveData(data));
  }

  ngOnDestroy(): void {
    this._unSubscribe.next();
    this._unSubscribe.complete();
  }
}
