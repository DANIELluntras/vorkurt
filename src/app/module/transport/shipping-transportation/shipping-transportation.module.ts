import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingTransportationComponent } from './shipping-transportation.component';
import { AppShippingTransportationRouting } from './shipping-transportation.routing';

@NgModule({
  declarations: [ShippingTransportationComponent],
  imports: [CommonModule, AppShippingTransportationRouting],
})
export class ShippingTransportationModule {}
