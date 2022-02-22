import { OverlayRef } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class OverlayPopUpRef {
  constructor(private _overlayRef: OverlayRef) {}

  close() {
    this._overlayRef.dispose();
    this._overlayRef.detach();
  }
}
