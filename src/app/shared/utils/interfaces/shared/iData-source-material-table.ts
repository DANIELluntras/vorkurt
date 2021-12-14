import { IActionMaterialColumn } from './iAction-material-column.type';

export interface IDataSourceMaterialTable<T> {
	dataSource : Array<T>;
	editable : boolean;
	actions : IActionMaterialColumn[];
}

