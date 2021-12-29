import { Injectable } from '@angular/core';
import { ConnectionService } from '../firebase/connection.service';
import { BehaviorSubject } from 'rxjs';
import { IAccount } from '../../interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private _repoData: BehaviorSubject<IAccount[]> = new BehaviorSubject<
    IAccount[]
  >([]);
  dataRepo$ = this._repoData.asObservable();

  constructor(private _firebase: ConnectionService) {}

  repoData(data: IAccount[]) {
    this._repoData.next(data);
  }

  filterDataFromQuery(select: string) {
    this._firebase.data
      .snapshotChanges()
      .pipe(
        map((changeData) =>
          changeData.map((c) => {
            let a = c.payload.doc.data();
            return {
              owner: a.owner,
              repo: a.repo,
              link: a.link,
              id: c.payload.doc.id,
            };
          })
        )
      )
      .subscribe((data) => {
        data.filter((e) => e.repo.toUpperCase().includes(select));
      });
  }
}
