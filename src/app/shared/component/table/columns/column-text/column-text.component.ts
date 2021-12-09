import { Component, OnInit } from '@angular/core';
import { BaseColumn }        from '../../base-column';

@Component( {
	selector: 'elix-column-text',
	templateUrl: './column-text.component.html',
	styleUrls: [ './column-text.component.scss' ],
	providers: [ { provide: BaseColumn, useExisting: ColumnTextComponent } ],
} )
export class ColumnTextComponent extends BaseColumn implements OnInit {
	
	ngOnInit () {
		console.log( this.field );
		
	}
}
