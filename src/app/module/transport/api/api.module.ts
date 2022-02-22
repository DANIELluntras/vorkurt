import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiComponent } from './api.component';
import { AppApiRouting } from './api.routing';

@NgModule({
  declarations: [ApiComponent],
  imports: [CommonModule, AppApiRouting],
})
export class ApiModule {}
