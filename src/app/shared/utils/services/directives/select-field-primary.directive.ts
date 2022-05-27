import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[elixSelectFieldPrimary]',
})
export class SelectFieldPrimaryDirective {
  constructor(private _element: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(
      this._element.nativeElement,
      'vorkurt__primary-select'
    );
  }
}
