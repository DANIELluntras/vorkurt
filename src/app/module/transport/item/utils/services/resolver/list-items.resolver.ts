import { Injectable }                                           from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map }                                                  from 'rxjs/operators';
import { ConnectionService }                                    from '../../../../../../shared/utils/services/firebase/connection.service';
import { ItemListService }                                      from '../item-list.service';
import { INewItemTypes }                                        from '../../interfaces';

@Injectable( {
	providedIn: 'root',
} )
export class ListItemsResolver implements Resolve<boolean> {
	
	constructor (private _firebase : ConnectionService, private _listItem : ItemListService) {
	}
	
	resolve (route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : any {
		this._firebase.setUrl( '/item_new' );
		
		this._firebase.data.snapshotChanges()
			.pipe( map( changeData => changeData
				.map( c => {
					let a = c.payload.doc.data();
					return a as INewItemTypes;
				} ) ) ).subscribe( data => this._listItem.retriveData( data ) );
	}
}
