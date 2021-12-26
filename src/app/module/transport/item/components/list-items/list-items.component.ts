import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IActionMaterialColumn } from '../../../../../shared/utils/interfaces/shared';
import { ItemListService } from '../../utils/services';
import { INewItemTypes } from '../../utils/interfaces';
import { IDataSourceMaterialTable } from '../../../../../shared/utils/interfaces/shared/iData-source-material-table';

@Component({
  selector: 'elix-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListItemsComponent implements OnInit {
  test = 'sfdas';
  dataSource: INewItemTypes[] | any;

  constructor(private _listItem: ItemListService) {}

  ngOnInit(): void {
    this._listItem.dataComming$.subscribe((resp: INewItemTypes[]) => {
      this.dataSource = resp.map((resp: INewItemTypes) => {
        return {
          actions: this.openAction(),
          editable: false,
          model: resp,
        } as IDataSourceMaterialTable<INewItemTypes>;
      });
    });
    // {
    // 	actions: this.openAction(),
    // 		editable: false, ...resspp,
    // },
  }

  openAction(): IActionMaterialColumn[] {
    return [
      {
        iconClass: 'fa_solid:check',
        classCss: 'check',
        method: (row: any) => (row.editable = !row.editable),
      },
      {
        iconClass: 'fa_solid:check',
        classCss: 'check',
        method: (row: any) => row.name,
      },
      {
        iconClass: 'fa_solid:check',
        classCss: 'check',
        method: (row: any) => row.whe,
      },
    ];
  }
}
