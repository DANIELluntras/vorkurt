import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupCollectionComponent } from './pickup-collection.component';
import { AppPickupCollectionRouting } from './pickup-collection.routing';

@NgModule({
  declarations: [PickupCollectionComponent],
  imports: [CommonModule, AppPickupCollectionRouting],
})
export class PickupColectionModule {}
