import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BtnPrimaryDirective,
  ElixDragDirective,
  InputPrimaryDirective,
} from './utils/services';
import {
  BreadCrumbComponent,
  ElixJumbotronComponent,
  ElixSpinnerComponent,
  TooltipComponent,
} from './component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ElixJumbotronComponent,
    ElixSpinnerComponent,
    ElixDragDirective,
    BtnPrimaryDirective,
    InputPrimaryDirective,
    BreadCrumbComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ElixSpinnerComponent,
    ElixDragDirective,
    ElixJumbotronComponent,
    BtnPrimaryDirective,
    InputPrimaryDirective,
    BreadCrumbComponent,
  ],
})
export class SharedModule {}
