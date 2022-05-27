import { Component, Input, OnInit } from '@angular/core';
import { BaseColumn } from '../../base-column';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'elix-column-number',
  templateUrl: './column-number.component.html',
  styleUrls: ['./column-number.component.scss'],
  providers: [{ provide: BaseColumn, useExisting: ColumnNumberComponent }],
})
export class ColumnNumberComponent<T> extends BaseColumn {
  @Input()
  public editRow: boolean = false;

  textValidator: FormControl = new FormControl();

  nonNumber: boolean;

  changeEntity(element: any) {
    this.textValidator.valueChanges.subscribe((resp) => {
      console.log(resp);
    });
  }
}
