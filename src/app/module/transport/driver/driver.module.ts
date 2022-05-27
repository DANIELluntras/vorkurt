import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver.component';
import { DriverModuleRouting } from './routing/driver.module.routing';
import { ListDriverComponent } from './components/list-driver/list-driver.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableMaterialModule } from 'src/app/shared/component';
import { AddedDriverComponent } from './components/added-driver/added-driver.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [DriverComponent, ListDriverComponent, AddedDriverComponent],
  imports: [
    CommonModule,
    DriverModuleRouting,
    TableMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
  ],
})
export class DriverModule {}
