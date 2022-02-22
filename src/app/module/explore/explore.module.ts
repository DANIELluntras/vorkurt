import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';
import { AppExploreRouting } from './explore.routing';

@NgModule({
  declarations: [ExploreComponent],
  imports: [CommonModule, AppExploreRouting],
})
export class ExploreModule {}
