import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  QueryList,
  ViewChild,
}                     from '@angular/core';
import { MatTable }   from '@angular/material/table';
import { BaseColumn } from '../base-column';

@Component( {
  selector: 'elix-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ],
} )
export class TableComponent<T> implements AfterViewInit {
  @Input() dataSource : any;
  displayedColumns : string[] = [ 'position' ];
  columns : any;
  // this is where the magic happens:
  @ViewChild( MatTable, { static: true } ) table : MatTable<any>;
  @ContentChildren( BaseColumn )
  columnDefs : QueryList<BaseColumn>;
  
  constructor (private _changeDetectorRef : ChangeDetectorRef) {
  }
  
  // after the <ng-content> has been initialized, the column definitions are available.
  ngAfterViewInit () : void {
    this.columns = this.columnDefs.map( (resp) => resp.columnDef.name );
    this.columnDefs
        .map( (resp) => resp.columnDef )
        .forEach( (rep) => this.table.addColumnDef( rep ) );
    this._changeDetectorRef.detectChanges();
  }
}
