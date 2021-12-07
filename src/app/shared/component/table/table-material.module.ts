import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { TableComponent }      from './table/table.component';
import { ColumnTextComponent } from './columns/column-text/column-text.component';
import { MatTableModule }      from '@angular/material/table';

@NgModule( {
  declarations: [ TableComponent, ColumnTextComponent ],
  imports: [ CommonModule, MatTableModule ],
  exports: [ TableComponent, ColumnTextComponent ],
} )
export class TableMaterialModule {
}
