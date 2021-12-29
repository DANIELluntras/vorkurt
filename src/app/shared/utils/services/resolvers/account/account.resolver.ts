import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { ConnectionService } from '../../firebase/connection.service';
import { AccountService } from '../../account/account.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccountResolver implements Resolve<boolean> {
  constructor(
    private _firebase: ConnectionService,
    private _accountService: AccountService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this._firebase
      .allDateTwoColection('users', 'repository')
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
      .subscribe((data) => this._accountService.repoData(data));
  }
}
