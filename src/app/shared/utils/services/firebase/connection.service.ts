import { Injectable }                                   from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { INewRepository, IWrapperRepository }           from "../../interfaces";
import { INewItemTypes }                                from '../../../../module/transport/item/utils/interfaces/iNew-item.types';

@Injectable( {
	providedIn: 'root',
} )
export class ConnectionService {
	repositoryRef : AngularFirestoreCollection<any>;
	private _dbPath = '/repository';
	
	constructor (private db : AngularFirestore,
	) {
		this.repositoryRef = db.collection( this._dbPath );
	}
	
	private _data : string;
	
	get data () {
		return this.repositoryRef;
	}
	
	setUrl (url : string) {
		this.repositoryRef = this.db.collection( url );
		this._dbPath = url;
	}
	
	updateData (data : INewRepository) {
		this._dbPath = '/templateff';
		
		return this.db.collection( this._dbPath ).add( data ).then( resp => resp );
	}
	
	createRepository (data : IWrapperRepository) {
		this._dbPath = '/repositoryNew';
		
		return this.db.collection( this._dbPath ).add( data ).then( resp => resp );
	}
	
	createItems (data : INewItemTypes) {
		
		this._dbPath = '/item_new';
		
		return this.db.collection( this._dbPath ).add( data ).then( resp => resp );
	}
}
