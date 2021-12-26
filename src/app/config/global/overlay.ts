import { ConnectedPosition } from '@angular/cdk/overlay';

export const configOverlay = {
  LEFT: {
    originX: 'start',
    originY: 'center',
    overlayX: 'end',
    overlayY: 'center',
  } as ConnectedPosition,
  RIGHT: {
    originX: 'start',
    originY: 'center',
    overlayX: 'start',
    overlayY: 'center',
  } as ConnectedPosition,
  TOP: {
    originX: 'start',
    originY: 'center',
    overlayX: 'start',
    overlayY: 'top',
  } as ConnectedPosition,
  BOTTOM: {
    originX: 'center',
    originY: 'top',
    overlayX: 'center',
    overlayY: 'bottom',
  } as ConnectedPosition,
};
