import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { ItemComponent }         from './item.component';
import { AppItemRouting }        from './item.routing';
import { MatIconModule }         from '@angular/material/icon';
import { MatButtonModule }       from '@angular/material/button';
import { MatCheckboxModule }     from '@angular/material/checkbox';
import { SharedModule }          from '../../../shared/shared.module';
import { MatInputModule }        from '@angular/material/input';
import { ReactiveFormsModule }   from '@angular/forms';
import { ItemsTooltipComponent } from './tooltip/items-tooltip/items-tooltip.component';
import { NewItemsComponent }     from './components/new-items/new-items.component';
import { ListItemsComponent }    from './components/list-items/list-items.component';
import { TableMaterialModule }   from '../../../shared/component/table/table-material.module';
import { MatTableModule }        from '@angular/material/table';

@NgModule({
  declarations: [
    ItemComponent,
    ItemsTooltipComponent,
    NewItemsComponent,
    ListItemsComponent,
  ],
  imports: [
    CommonModule,
    AppItemRouting,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    SharedModule,
    MatInputModule,
    ReactiveFormsModule,
    TableMaterialModule,
  ],
})
export class ItemModule {}
