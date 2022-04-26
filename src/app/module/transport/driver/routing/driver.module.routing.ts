import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DriverRoutesRouting } from './driverRoutes.routing';

@NgModule({
  imports: [RouterModule.forChild(DriverRoutesRouting)],
  exports: [RouterModule],
})
export class DriverModuleRouting {}
