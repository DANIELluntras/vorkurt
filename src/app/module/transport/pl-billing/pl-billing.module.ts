import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlBillingComponent } from './pl-billing.component';
import { AppPlBillingRouting } from './pl-billing.routing';
import { WalletComponent } from './wallet/wallet.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [PlBillingComponent, WalletComponent],
  imports: [CommonModule, AppPlBillingRouting, SharedModule],
})
export class PlBillingModule {}
