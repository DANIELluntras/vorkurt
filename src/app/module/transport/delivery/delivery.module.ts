import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from './delivery.component';
import { AppDeliveryRouting } from './delivery.routing';

@NgModule({
  declarations: [DeliveryComponent],
  imports: [CommonModule, AppDeliveryRouting],
})
export class DeliveryModule {}
