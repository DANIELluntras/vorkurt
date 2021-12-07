import { Component, Input, ViewChild } from '@angular/core';
import { MatColumnDef }                from '@angular/material/table';

@Component({
  selector: 'app-base',
  template: '',
})
export abstract class BaseColumn {

  @ViewChild(MatColumnDef) columnDef : MatColumnDef

  @Input()
  name: string;

  @Input()
  field: string;

  @Input()
  className: string;

  @Input()
  iconClass: string;
}
