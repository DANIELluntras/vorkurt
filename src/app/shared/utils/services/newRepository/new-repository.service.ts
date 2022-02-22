import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INewRepository } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class NewRepositoryService {
  private _newRepo: BehaviorSubject<INewRepository[]> = new BehaviorSubject<
    INewRepository[]
  >([]);
  newRepo$ = this._newRepo.asObservable();

  constructor() {}

  newRepoRetriveData(data: INewRepository[]) {
    this._newRepo.next(data);
  }
}
