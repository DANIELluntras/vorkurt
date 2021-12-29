import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ConnectionService} from "../../firebase/connection.service";
import {NewRepositoryService} from "../../newRepository/new-repository.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NewRepositoryResolver implements Resolve<boolean> {

  constructor(private _firebase: ConnectionService, private _newRepository: NewRepositoryService) {
    this._firebase.setUrl('/template')
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{

    this._firebase.allDateTwoColection('users','template').snapshotChanges()
      .pipe(map(changeData => changeData
        .map(c => {
          let a = c.payload.doc.data();
          return {
            template: a.template,
            id: c.payload.doc.id,
            check: a.check,
            icon: a.icon
          }
        }))).subscribe(data => this._newRepository.newRepoRetriveData(data))
  }
}
