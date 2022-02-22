import { Component, OnInit } from '@angular/core';
import { TooltipItemsService } from '../../../../../shared/utils/services';

@Component({
  selector: 'elix-items-tooltip',
  templateUrl: './items-tooltip.component.html',
  styleUrls: ['./items-tooltip.component.scss'],
})
export class ItemsTooltipComponent implements OnInit {
  value: string;
  constructor(private _tooltipService: TooltipItemsService) {}

  ngOnInit(): void {
    this._tooltipService.dataSend$.subscribe((resp) => (this.value = resp));
  }
}
