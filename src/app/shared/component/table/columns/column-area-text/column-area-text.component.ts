import { Component }  from '@angular/core';
import { BaseColumn } from '../../base-column';

@Component( {
	selector: 'elix-column-area-text',
	templateUrl: './column-area-text.component.html',
	styleUrls: [ './column-area-text.component.scss' ],
	providers: [ { provide: BaseColumn, useExisting: ColumnAreaTextComponent } ],
} )
export class ColumnAreaTextComponent extends BaseColumn {

}
