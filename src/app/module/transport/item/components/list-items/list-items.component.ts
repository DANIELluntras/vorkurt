import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IActionMaterialColumn }                from '../../../../../shared/utils/interfaces/shared';

export interface PeriodicElement {
	name : string;
	position : number;
	weight : number;
	symbol : string;
	whe : string;
	sasd : any;
}

const ELEMENT_DATA : PeriodicElement[] = [
	{
		position: 1,
		name: 'Hydrogen',
		weight: 1.0079,
		symbol: 'H',
		whe: '',
		sasd: 'ss',
	},
	{
		position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', whe: '',
		sasd: 'ss',
	},
	{
		position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', whe: '',
		sasd: 'ss',
	},
	{
		position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', whe: '',
		sasd: 'ss',
	},
	{
		position: 5, name: 'Boron', weight: 10.811, symbol: 'B', whe: '',
		sasd: 'ss',
	},
	{
		position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', whe: '',
		sasd: 'ss',
	},
	{
		position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', whe: '',
		sasd: 'ss',
	},
	{
		position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', whe: '',
		sasd: 'ss',
	},
	{
		position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', whe: '',
		sasd: 'ss',
	},
	{
		position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', whe: '',
		sasd: 'ss',
	},
];


@Component( {
	selector: 'elix-list-items',
	templateUrl: './list-items.component.html',
	styleUrls: [ './list-items.component.scss' ],
	encapsulation: ViewEncapsulation.None,
} )
export class ListItemsComponent implements OnInit {
	test = 'sfdas';
	dataSource : PeriodicElement[] | any;
	
	constructor () {
	}
	
	ngOnInit () : void {
		
		
		this.dataSource = ELEMENT_DATA.map( resp => {
			return { actions: this.openAction(), editable: false, ...resp };
		} );
	}
	
	openAction () : IActionMaterialColumn [] {
		return [ {
			iconClass: 'fa_solid:check',
			classCss: 'check',
			method: (row : any) => row.position,
		}, {
			iconClass: 'fa_solid:check',
			classCss: 'check',
			method: (row : any) => row.name,
		}, {
			iconClass: 'fa_solid:check',
			classCss: 'check',
			method: (row : any) => row.whe,
		},
		];
	}
	
}
