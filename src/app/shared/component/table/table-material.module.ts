import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { TableComponent }      from './table/table.component';
import { ColumnTextComponent } from './columns/column-text/column-text.component';
import { MatTableModule }      from '@angular/material/table';
import { BaseColumn }          from './base-column';

@NgModule( {
  declarations: [ TableComponent, ColumnTextComponent, BaseColumn ],
  imports: [ CommonModule, MatTableModule ],
  exports: [ TableComponent, ColumnTextComponent ],
} )
export class TableMaterialModule {
}
