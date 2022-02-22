import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimmerComponent } from './timmer/timmer.component';

const routes: Routes = [
  { path: '', redirectTo: 'timer', pathMatch: 'full' },
  {
    path: '',
    component: TimmerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppHeaderRouting {}
