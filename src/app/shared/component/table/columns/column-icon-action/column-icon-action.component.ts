import { Component }  from '@angular/core';
import { BaseColumn } from '../../base-column';

@Component( {
	selector: 'elix-column-icon-action',
	templateUrl: './column-icon-action.component.html',
	styleUrls: [ './column-icon-action.component.scss' ],
	providers: [ { provide: BaseColumn, useExisting: ColumnIconActionComponent } ],
} )
export class ColumnIconActionComponent extends BaseColumn {
	a : any;
	
	ngOnInit () {
		// eval()
		console.log( this.a );
	}
	
	tes () {
		console.log( this );
	}
	
}
