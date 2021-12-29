import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { INewRepository, IWrapperRepository } from '../../interfaces';
import { INewItemTypes } from '../../../../module/transport/item/utils/interfaces/iNew-item.types';
import firebase from 'firebase/compat';
import UserCredential = firebase.auth.UserCredential;
import {LocalStorageDataService} from "../abstract";

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  repositoryRef: AngularFirestoreCollection<any>;
  private _dbPath = '/repository';
  user = JSON.parse(this._localStorage.getResource('user'))

  constructor(private _db: AngularFirestore, private _localStorage: LocalStorageDataService) {
    this.repositoryRef = _db.collection(this._dbPath);
  }

  private _data: string;

  get data() {
    return this.repositoryRef;
  }

  setUrl(url: string) {
    this.repositoryRef = this._db.collection(url);
    this._dbPath = url;
  }

  updateData(data: INewRepository) {
    this._dbPath = '/templateff';

    return this._db
      .collection(this._dbPath)
      .add(data)
      .then((resp) => resp);
  }

  createRepository(data: IWrapperRepository) {
    this._dbPath = '/repositoryNew';

    return this._db
      .collection(this._dbPath)
      .add(data)
      .then((resp) => resp);
  }

  createItems(data: any, path?: string) {

    return this._db
      .collection('/users')
      .doc(this.user.user.email)
      .collection(path)
      .add(data)
  }

  createDB(data: any, documentID: UserCredential) {
    this._dbPath = `/users`;
    this._db.collection(this._dbPath).doc(documentID.user.email).set(data);
  }

  allDateTwoColection(parentCollection: string, secondCollection: string){

    return this._db
      .collection(parentCollection)
      .doc(this.user.user.email)
      .collection(secondCollection);
  }
}
