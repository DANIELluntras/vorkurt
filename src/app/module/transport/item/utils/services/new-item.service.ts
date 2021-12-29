import { Injectable }               from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { INewItemTypes }            from '../interfaces/iNew-item.types';
import { ConnectionService }        from '../../../../../shared/utils/services/firebase/connection.service';
import { ItemListService }          from './item-list.service';

@Injectable( {
	providedIn: 'root',
} )
export class NewItemService {
	private _podsIsOnThePipe : Subject<boolean> = new Subject<boolean>();
	/**
	 * Observable
	 */

	podsOnPipe$ = this._podsIsOnThePipe.asObservable();
	private _dataSendOnDatabase : BehaviorSubject<INewItemTypes> = new BehaviorSubject<INewItemTypes>( {} as INewItemTypes );
	dataSend$ = this._dataSendOnDatabase.asObservable();

	constructor (private _connectionFirebase : ConnectionService, private _itemList : ItemListService) {

	}

	valueOnPodsNext (value : boolean) {
		this._podsIsOnThePipe.next( value );
	}

	dataSend (value : INewItemTypes) {
		let dataSource : INewItemTypes[] = [];
		this._itemList.dataComming$.subscribe( resp => dataSource = resp );
		this._dataSendOnDatabase.next( value );
		dataSource.findIndex( resp => resp.categoryId === value.categoryId );
		if ( dataSource.findIndex( resp => resp.categoryId === value.categoryId ) === -1 ) {
			return this._connectionFirebase.createItems( value , 'item_new').catch( response => console.log( response ) );
		}
		throw new Error( 'Duplicate Item' );
	}

}
