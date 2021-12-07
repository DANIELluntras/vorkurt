import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { BaseColumn } from '../base-column';

@Component({
  selector: 'elix-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent<T> implements AfterViewInit {
  @Input() dataSource: any;
  columns: any;
  // this is where the magic happens:
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ContentChildren(BaseColumn)
  columnDefs: QueryList<BaseColumn>;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  // after the <ng-content> has been initialized, the column definitions are available.
  ngAfterViewInit(): void {
    this.columns = this.columnDefs.map((resp) => resp.columnDef.name);
    this.columnDefs
      .map((resp) => resp.columnDef)
      .forEach((rep) => this.table.addColumnDef(rep));
    console.log(this.columns);

    this._changeDetectorRef.detectChanges();
  }
}
