import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import {
  BtnPrimaryDirective,
  ElixDragDirective,
  InputPrimaryDirective,
  TooltipDirectiveDirective,
}                                 from './utils/services';
import { ElixSpinnerComponent }   from './component/spinner/elix-spinner.component';
import { ElixJumbotronComponent } from './component/jumbotron/elix-jumbotron.component';
import { BreadCrumbComponent }    from './component/bread-crumb/bread-crumb.component';
import { RouterModule }           from '@angular/router';

@NgModule({
  declarations: [
    ElixSpinnerComponent,
    ElixDragDirective,
    ElixJumbotronComponent,
    BtnPrimaryDirective,
    InputPrimaryDirective,
    TooltipDirectiveDirective,
    BreadCrumbComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ElixSpinnerComponent,
    ElixDragDirective,
    ElixJumbotronComponent,
    BtnPrimaryDirective,
    InputPrimaryDirective,
    TooltipDirectiveDirective,
    BreadCrumbComponent,
  ],
})
export class SharedModule {}
