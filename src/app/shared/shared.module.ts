import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BtnPrimaryDirective,
  ElixDragDirective,
  InputPrimaryDirective,
  TooltipDirectiveDirective,
}                       from './utils/services';
import {
  BreadCrumbComponent,
  ElixJumbotronComponent,
  ElixSpinnerComponent,
}                       from './component';
import { RouterModule } from '@angular/router';

@NgModule( {
  declarations: [
    ElixSpinnerComponent,
    ElixDragDirective,
    ElixJumbotronComponent,
    BtnPrimaryDirective,
    InputPrimaryDirective,
    TooltipDirectiveDirective,
    BreadCrumbComponent,
  ],
  imports: [ CommonModule, RouterModule ],
  exports: [
    ElixSpinnerComponent,
    ElixDragDirective,
    ElixJumbotronComponent,
    BtnPrimaryDirective,
    InputPrimaryDirective,
    TooltipDirectiveDirective,
    BreadCrumbComponent,
  ],
} )
export class SharedModule {
}
