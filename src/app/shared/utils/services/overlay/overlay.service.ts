import {Injectable} from '@angular/core';
import {Overlay} from "@angular/cdk/overlay";
import {ComponentPortal} from "@angular/cdk/portal";
import {configOverlay} from '../../../../config/global/overlay';
import {SharedArrowService} from "../table/shared-arrow.service";

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  private overlayRef: any;
  private component: ComponentPortal<any>;

  constructor(private _ovelay: Overlay, private _sharedArrow: SharedArrowService) {
  }

  display(element: any, exampleOverlayComponent: any) {
    this._sharedArrow.open(element)

    const target = element;
    this.overlayRef = this._ovelay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'vorkurt-overlay',
      positionStrategy: this._ovelay.position()
        .flexibleConnectedTo(target)
        .withPositions([
          configOverlay.bottomLeft,
          configOverlay.bottomRight,
          configOverlay.topLeft,
          configOverlay.topRight,
        ]),
    });
    this.component = new ComponentPortal(exampleOverlayComponent);
    this.overlayRef.attach(this.component);
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
      this.overlayRef.dispose();
    });
  }

  closeOverlay() {
    this.overlayRef.detach();
  }
}
