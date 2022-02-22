import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerVendorComponent } from './customer-vendor.component';
import { AppCustomerRouting } from './customer-vendor.routing';

@NgModule({
  declarations: [CustomerVendorComponent],
  imports: [CommonModule, AppCustomerRouting],
})
export class CustomerVendorModule {}
