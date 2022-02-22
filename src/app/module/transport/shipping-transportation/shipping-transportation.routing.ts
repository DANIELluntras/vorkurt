import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingTransportationComponent } from './shipping-transportation.component';

const routes: Routes = [
  {
    path: '',
    component: ShippingTransportationComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppShippingTransportationRouting {}
