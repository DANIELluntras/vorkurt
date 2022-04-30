import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver.component';
import { DriverModuleRouting } from './routing/driver.module.routing';
import { ListDriverComponent } from './components/list-driver/list-driver.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableMaterialModule } from 'src/app/shared/component';

@NgModule({
  declarations: [DriverComponent, ListDriverComponent],
  imports: [
    CommonModule,
    DriverModuleRouting,
    TableMaterialModule,
    SharedModule,
  ],
})
export class DriverModule {}
