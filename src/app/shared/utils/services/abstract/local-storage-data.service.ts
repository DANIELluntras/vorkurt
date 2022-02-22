import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageDataService {
  constructor() {}

  getResource(key: string): string | null {
    return localStorage.getItem(key);
  }

  setResource(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  deleteResource(key: string) {
    return localStorage.removeItem(key);
  }

  clearAllValue() {
    return localStorage.clear();
  }
}
