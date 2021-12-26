import { Component, Input } from '@angular/core';

@Component({
  selector: 'elix-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() width: number;
}

