import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[elixTableInputPrimary]',
})
export class TableInputPrimaryDirective {
  constructor(private _element: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(
      this._element.nativeElement,
      'vorkurt__primary-input__table'
    );
  }
}
