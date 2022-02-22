import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerVendorComponent } from './customer-vendor.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerVendorComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppCustomerRouting {}
