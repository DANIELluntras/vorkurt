import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { BaseColumn } from '../../base-column';
import { DataSourceMaterialTable } from '../../../../utils/interfaces';

@Component({
  selector: 'elix-column-text',
  templateUrl: './column-text.component.html',
  styleUrls: ['./column-text.component.scss'],
  providers: [{ provide: BaseColumn, useExisting: ColumnTextComponent }],
  encapsulation: ViewEncapsulation.None,
})
export class ColumnTextComponent<T> extends BaseColumn {
  @Output()
  public onValueChanges: EventEmitter<DataSourceMaterialTable<T>> =
    new EventEmitter();

  public changeEntity(rowElement: DataSourceMaterialTable<T>) {
    this.onValueChanges.emit(rowElement);
  }
}
