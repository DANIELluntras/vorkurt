import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataTableService } from '../../data-table/data-table.service';

@Injectable({
  providedIn: 'root',
})
export class TableDataResolver implements Resolve<boolean> {
  constructor(private _dataTableService: DataTableService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return of(
      this._dataTableService.dataStoreBehavior(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
    );
  }
}
