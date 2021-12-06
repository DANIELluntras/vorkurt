import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { TransportFrameComponent } from './transport-frame.component';
import { AppTransportRouting }     from './transport.routing';
import { MatIconModule }           from '@angular/material/icon';
import { SharedModule }            from '../../shared/shared.module';

@NgModule( {
  declarations: [ TransportFrameComponent ],
  imports: [ CommonModule, AppTransportRouting, MatIconModule, SharedModule ],
} )
export class TransportModule {
}
