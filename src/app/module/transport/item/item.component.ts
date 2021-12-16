import { Component, OnInit }                     from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter }                                from 'rxjs/operators';
import { NewItemService }                        from './utils/services/new-item.service';

@Component( {
	selector: 'elix-item',
	templateUrl: './item.component.html',
	styleUrls: [ './item.component.sass' ],
} )
export class ItemComponent implements OnInit {
	path : any = "";
	
	constructor (
		private _router : Router,
		private _activatedRoute : ActivatedRoute,
		private _newItem: NewItemService
	) {
		this.navigation();
	}
	
	goToPage (action : string) {
		if(action === 'finish')
		{
			this._newItem.valueOnPodsNext(true)
		}
	}
	
	ngOnInit () {
		this.navigation();
	}
	
	navigation () {
		this._router.events.pipe( filter( resp => resp instanceof NavigationEnd ) ).subscribe( (url : any) => {
			return this.path = url.url.split( '/' ).indexOf( 'new' ) == -1;
		} );
	}
}
