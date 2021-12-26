import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {NewItemService} from './utils/services/new-item.service';
import {ElixTooltipService} from "../../../shared/utils/services/overlay/elix-tooltip.service";

@Component({
  selector: 'elix-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass'],
})
export class ItemComponent implements OnInit {
  path: any = "";
  value: boolean = true

  @ViewChild('tooltipRef') tooltipRef: TemplateRef<any>

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _newItem: NewItemService,
    private _elixTooltip: ElixTooltipService,
    private _viewContainer: ViewContainerRef
  ) {
    this.navigation();
  }

  goToPage(action: string) {
    if (action === 'finish') {
      this._newItem.valueOnPodsNext(true)
    }
  }

  ngOnInit() {
    this.navigation();
  }

  navigation() {
    this._router.events.pipe(filter(resp => resp instanceof NavigationEnd)).subscribe((url: any) => {
      return this.path = url.url.split('/').indexOf('new') == -1;
    });
  }

  onClick(element : HTMLElement) {
    this.value = true;
    this._elixTooltip.initTooltip(this.tooltipRef, this._viewContainer, element)
  }

  onLeave() {
    this._elixTooltip.close()
  }
}
