import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { BaseColumn } from '../base-column';
import { IDataSourceMaterialTable } from '../../../utils/interfaces/shared/iData-source-material-table';
import { BehaviorSubject } from 'rxjs';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'elix-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent<T> implements AfterViewInit {
  @Input() dataSource: Array<T>;
  @Input()
  extensible: boolean = false;
  @Input()
  extandble$: BehaviorSubject<IDataSourceMaterialTable<T> | null>;
  @Input()
  newElementExtandble: TemplateRef<any>;

  columnsToDispaly: string[] = [];
  // this is where the magic happens:
  @ViewChild(MatTable, { static: true }) table: MatTable<T>;
  @ContentChildren(BaseColumn)
  columnDefs: QueryList<BaseColumn>;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  // after the <ng-content> has been initialized, the column definitions are available.
  ngAfterViewInit(): void {
    this.columnsToDispaly = this.columnDefs.map(
      (resp: BaseColumn) => resp.columnDef.name
    );
    this.columnDefs
      .map((resp: BaseColumn) => resp.columnDef)
      .forEach((rep: MatColumnDef) => this.table.addColumnDef(rep));

    try {
      let duplicate = this.columnsToDispaly.filter(
        (columnDisplay: string, index: number, self: string[]) =>
          index === self.findIndex((value: string) => value === columnDisplay)
      );
      if (duplicate.length < this.columnsToDispaly.length) {
        throw new Error(
          'You duplicate value what you want to display, Please look in definitions at columns'
        );
      }
    } catch (err) {
      console.error(err);
    }

    this._changeDetectorRef.detectChanges();
  }
}
