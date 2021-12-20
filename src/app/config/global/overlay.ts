import { ConnectedPosition } from '@angular/cdk/overlay';

export const configOverlay = {
  bottomLeft:
		{
			originX: 'start',
			originY: 'bottom',
			overlayX: 'start',
			overlayY: 'top',
		} as ConnectedPosition,
  bottomRight:
		{
			originX: 'end',
			originY: 'bottom',
			overlayX: 'end',
			overlayY: 'top',
		} as ConnectedPosition,
	topLeft:
		{
			originX: 'start',
			originY: 'top',
			overlayX: 'start',
			overlayY: 'bottom',
		} as ConnectedPosition,
	topRight:
		{
			originX: 'end',
			originY: 'top',
			overlayX: 'end',
			overlayY: 'bottom',
		} as ConnectedPosition,
};
