import { IActionMaterialColumn } from './action-material-column.type';

export interface DataSourceMaterialTable<T> {
  model: T;
  editable: boolean;
  actions: IActionMaterialColumn[];
}
