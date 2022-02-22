import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { PopUpLoginComponent } from '../../../../module/header/pop-up-login/pop-up-login.component';
import { OverlayPopUpRef } from './overlay-pop-up.ref';

interface IDialoConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: IDialoConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'elixir-dialog-panel',
};

@Injectable({
  providedIn: 'root',
})
export class OverlayPopUpService {
  dialogRef: any;
  overlayRef: any;
  filePortal: any;

  constructor(private _overlay: Overlay) {}

  open(event: MouseEvent, config: IDialoConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };
    this.overlayRef = this.createOverlay(dialogConfig, event);
    this.dialogRef = new OverlayPopUpRef(this.overlayRef);
    this.filePortal = new ComponentPortal(PopUpLoginComponent);
    this.overlayRef.attach(this.filePortal);

    this.overlayRef
      .backdropClick()
      .subscribe((_: any) => this.dialogRef.close());
    return this.overlayRef;
  }

  closeOverlay() {
    this.dialogRef.close();
  }

  private createOverlay(config: IDialoConfig, event: MouseEvent) {
    const overlayConfig = this.getOverlayConfig(config, event);
    return this._overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: IDialoConfig, event: MouseEvent) {
    const positionStrategy = this._overlay
      .position()
      .global()
      .left(event.clientX - 176 + 'px')
      .top(event.clientY + 3 + 'px');

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this._overlay.scrollStrategies.block(),
      positionStrategy,
    });
    return overlayConfig;
  }
}
