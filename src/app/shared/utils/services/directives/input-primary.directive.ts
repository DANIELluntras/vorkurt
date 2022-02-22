import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[elixInputPrimary]',
})
export class InputPrimaryDirective {
  constructor(private _el: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(this._el.nativeElement, 'vorkurt__primary-input');
  }
}
