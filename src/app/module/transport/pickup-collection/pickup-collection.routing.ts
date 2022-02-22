import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickupCollectionComponent } from './pickup-collection.component';

const routes: Routes = [
  {
    path: '',
    component: PickupCollectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPickupCollectionRouting {}
