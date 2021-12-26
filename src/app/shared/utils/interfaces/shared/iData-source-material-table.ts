import { IActionMaterialColumn } from './iAction-material-column.type';

export interface IDataSourceMaterialTable<T> {
  model : T;
	editable : boolean;
	actions : IActionMaterialColumn[];
}

