import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  QueryList,
  ViewChild,
  ViewEncapsulation,
}                                 from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { BaseColumn }             from '../base-column';

@Component( {
  selector: 'elix-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ],
  encapsulation: ViewEncapsulation.None,
} )
export class TableComponent<T> implements AfterViewInit {
  @Input() dataSource : Array<T>;
  columnsToDispaly : string[];
  // this is where the magic happens:
  @ViewChild( MatTable, { static: true } ) table : MatTable<T>;
  @ContentChildren( BaseColumn )
  columnDefs : QueryList<BaseColumn>;
  
  constructor (private _changeDetectorRef : ChangeDetectorRef) {
  }
  
  // after the <ng-content> has been initialized, the column definitions are available.
  ngAfterViewInit () : void {
    this.columnsToDispaly = this.columnDefs.map(
        (resp : BaseColumn) => resp.columnDef.name
    );
    this.columnDefs
        .map( (resp : BaseColumn) => resp.columnDef )
        .forEach( (rep : MatColumnDef) => this.table.addColumnDef( rep ) );
    
    try {
      let duplicate = this.columnsToDispaly.filter(
          (columnDisplay : string, index : number, self : string[]) =>
              index === self.findIndex( (value : string) => value === columnDisplay )
      );
      if ( duplicate.length < this.columnsToDispaly.length ) {
        throw new Error(
            'You duplicate value what you want to display, Please look in definitions at columns'
        );
      }
    }
    catch ( err ) {
      console.error( err );
    }
    
    this._changeDetectorRef.detectChanges();
  }
}
