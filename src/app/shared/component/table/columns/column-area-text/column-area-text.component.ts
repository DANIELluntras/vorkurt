import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BaseColumn } from '../../base-column';
import { ElixTooltipService } from '../../../../utils/services/overlay/elix-tooltip.service';
import { IDataSourceMaterialTable } from '../../../../utils/interfaces/shared/iData-source-material-table';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'elix-column-area-text',
  templateUrl: './column-area-text.component.html',
  styleUrls: ['./column-area-text.component.scss'],
  providers: [{ provide: BaseColumn, useExisting: ColumnAreaTextComponent }],
})
export class ColumnAreaTextComponent extends BaseColumn {
  value: boolean = false;
  vars: any;
  @ViewChild('tooltipRef') tooltipRef: TemplateRef<any>;
  tooltipOverlay: OverlayRef;
  width: number = 400;

  constructor(
    private _elixTooltip: ElixTooltipService,
    private _viewContainer: ViewContainerRef
  ) {
    super();
  }

  openTooltip(element: HTMLElement, model: IDataSourceMaterialTable<any>) {
    this.value = false;
    if (!this.tooltipOverlay || !this.tooltipOverlay.hasAttached()) {
      this.vars = model.model[this.field];
      this.tooltipOverlay = this._elixTooltip.initTooltip(
        this.tooltipRef,
        this._viewContainer,
        element,
        this.width
      );
      this.tooltipOverlay.backdropElement.classList.add('cursor-pointer');
    }
  }

  closeTooltip(){
    this.value = true
    this.tooltipOverlay.detach()
    this.tooltipOverlay.dispose()
  }

  doubleClick(element: IDataSourceMaterialTable<any>, value: boolean) {
    this.value = true;
    element.editable = value;
  }
}
