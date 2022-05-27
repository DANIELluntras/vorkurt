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
import { AllFrameSharedComponent } from './component/all-frame-shared/all-frame-shared.component';
import { InputSecondaryDirective } from './utils/services/directives/input-secondary.directive';
import { TableInputPrimaryDirective } from './utils/services/directives/table-input-primary.directive';
import { SelectFieldPrimaryDirective } from './utils/services/directives/select-field-primary.directive';

@NgModule({
  declarations: [
    ElixJumbotronComponent,
    ElixSpinnerComponent,
    ElixDragDirective,
    BtnPrimaryDirective,
    InputPrimaryDirective,
    BreadCrumbComponent,
    AllFrameSharedComponent,
    InputSecondaryDirective,
    TableInputPrimaryDirective,
    SelectFieldPrimaryDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ElixSpinnerComponent,
    ElixDragDirective,
    ElixJumbotronComponent,
    BtnPrimaryDirective,
    InputPrimaryDirective,
    BreadCrumbComponent,
    InputSecondaryDirective,
    TableInputPrimaryDirective,
  ],
})
export class SharedModule {}
