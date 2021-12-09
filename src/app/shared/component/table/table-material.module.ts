import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import { TableComponent }            from './table/table.component';
import { ColumnTextComponent }       from './columns/column-text/column-text.component';
import { MatTableModule }            from '@angular/material/table';
import { ColumnAreaTextComponent }   from './columns/column-area-text/column-area-text.component';
import { ColumnIconActionComponent } from './columns/column-icon-action/column-icon-action.component';
import { MatIconModule }             from '@angular/material/icon';
import { MatButtonModule }           from '@angular/material/button';

@NgModule( {
	declarations: [ TableComponent, ColumnTextComponent, ColumnAreaTextComponent, ColumnIconActionComponent ],
	imports: [ CommonModule, MatTableModule, MatIconModule, MatButtonModule ],
	exports: [ TableComponent, ColumnTextComponent, ColumnAreaTextComponent, ColumnIconActionComponent ],
} )
export class TableMaterialModule {
}
