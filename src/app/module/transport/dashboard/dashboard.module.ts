import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppDashboardRouting } from './dashboard.routing';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, AppDashboardRouting],
})
export class DashboardModule {}
