import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemplateRepositoryService {
  private _templateData: Subject<string> = new Subject<string>();
  private _templateUserName: Subject<string> = new Subject<string>();
  private _templateRepositoryName: Subject<string> = new Subject<string>();
  private _templateDescription: Subject<string> = new Subject<string>();
  private _templateRepository: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  templateData$ = this._templateData.asObservable();
  templateUserName$ = this._templateUserName.asObservable();
  templateRepositoryName$ = this._templateRepositoryName.asObservable();
  templateDescription$ = this._templateDescription.asObservable();
  templateRepositoryAvailable$ = this._templateRepository.asObservable();

  sendDataOnObservable(data: string) {
    this._templateData.next(data);
  }

  sendUserNameOnObservable(data: string) {
    this._templateUserName.next(data);
  }

  sendRepositoryNameOnObservable(data: string) {
    this._templateRepositoryName.next(data);
  }

  sendDescriptionNameOnObservable(data: string) {
    this._templateDescription.next(data);
  }

  sendRepositoryAvailableOnObservable(data: boolean) {
    this._templateRepository.next(data);
  }
}
