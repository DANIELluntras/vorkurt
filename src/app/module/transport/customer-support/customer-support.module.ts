import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSupportComponent } from './customer-support.component';
import { AppCustomerRouting } from './customer-support.routing';

@NgModule({
  declarations: [CustomerSupportComponent],
  imports: [CommonModule, AppCustomerRouting],
})
export class CustomerSupportModule {}
