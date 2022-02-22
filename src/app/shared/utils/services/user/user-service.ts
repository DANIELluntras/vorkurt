import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user/user';
import { LocalStorageDataService } from '../abstract/local-storage-data.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _localStorage: LocalStorageDataService) {}

  setUserLoggedIn(user: User | any) {
    this._localStorage.setResource('user', JSON.stringify(user));
  }

  getUserLoggedIn() {
    if (localStorage.getItem('user')) {
      return JSON.parse(<string>this._localStorage.getResource('user'));
    } else {
      console.log('local storage is empty');
      return null;
    }
  }

  clearLocalStorage() {
    this._localStorage.clearAllValue();
  }
}
