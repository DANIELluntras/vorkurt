import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandleService {
  constructor(private _injectable: Injector) {}

  handleError(error: any) {
    const routerProperty = this._injectable.get(Router);
    console.warn(`${routerProperty.url}`);

    if (error instanceof HttpErrorResponse) {
      console.log(`Error from backend ${error.status}`);
      console.log(`Response body ${error.message}`);
    } else {
      console.warn(`An error occurred ${error.message}`);
    }
  }
}
