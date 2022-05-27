import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[elixInputSecondary]',
})
export class InputSecondaryDirective {
  constructor(private _element: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(
      this._element.nativeElement,
      'vorkurt__primary-input-secondary'
    );
  }
}
