import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[elixElixDrag]',
})
export class ElixDragDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() resizableGrabWidth = 8;
  @Input() resizableMinWidth = 10;
  dragging = false;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    const self = this;

    function preventSeePointerWhenResize() {
      document.body.style.pointerEvents = 'none';
    }

    function setPointerAfterResize() {
      document.body.style.pointerEvents = 'auto';
    }

    const newWidth = (wid: number) => {
      const newWidth = Math.max(this.resizableMinWidth, wid);
      _elementRef.nativeElement.style.width = newWidth + 'px';
    };

    const mouseMoveG = (evt: MouseEvent) => {
      if (!this.dragging) {
        return;
      }
      newWidth(evt.clientX + _elementRef.nativeElement.offsetLeft);
      evt.stopPropagation();
    };

    const mouseUpG = (evt: MouseEvent) => {
      if (!this.dragging) {
        return;
      }
      setPointerAfterResize();
      this.dragging = false;
      evt.stopPropagation();
    };

    const mouseDown = (evt: MouseEvent) => {
      if (this.inDragRegion(evt)) {
        this.dragging = true;
        preventSeePointerWhenResize();
        evt.stopPropagation();
      }
    };

    const mouseMove = (evt: any) => {
      if (this.inDragRegion(evt) || this.dragging) {
        _elementRef.nativeElement.style.cursor = 'col-resize';
      } else {
        _elementRef.nativeElement.style.cursor = 'default';
      }
    };

    document.addEventListener('mousemove', mouseMoveG, true);
    document.addEventListener('mouseup', mouseUpG, true);
    _elementRef.nativeElement.addEventListener('mousedown', mouseDown, true);
    _elementRef.nativeElement.addEventListener('mousemove', mouseMove, true);
  }

  ngOnInit(): void {}

  inDragRegion(evt: MouseEvent): boolean {
    return (
      this._elementRef.nativeElement.clientWidth -
        evt.clientX +
        this._elementRef.nativeElement.offsetLeft <
      this.resizableGrabWidth
    );
  }
}
