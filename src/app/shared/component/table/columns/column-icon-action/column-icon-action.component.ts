import { Component, OnInit } from '@angular/core';
import { BaseColumn }        from '../../base-column';

@Component({
  selector: 'elix-column-icon-action',
  templateUrl: './column-icon-action.component.html',
  styleUrls: ['./column-icon-action.component.scss'],
  providers: [{provide: BaseColumn, useExisting: ColumnIconActionComponent}]
})
export class ColumnIconActionComponent extends BaseColumn {

}
