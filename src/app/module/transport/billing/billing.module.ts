import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing.component';
import { AppBillingRouting } from './billing.routing';

@NgModule({
  declarations: [BillingComponent],
  imports: [CommonModule, AppBillingRouting],
})
export class BillingModule {}
