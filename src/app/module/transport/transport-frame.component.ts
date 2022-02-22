import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ITmsRouter } from '../../shared/utils/interfaces';

@Component({
  selector: 'elix-transport',
  templateUrl: './transport-frame.component.html',
  styleUrls: ['./transport-frame.component.scss'],
})
export class TransportFrameComponent {
  routerForSideBar: ITmsRouter[];
  activeRoute: boolean = false;

  constructor(
    private _activateRouter: ActivatedRoute,
    private _router: Router
  ) {
    this.routerForSideBar = this._activateRouter.snapshot.data.data;
    this._router.events.subscribe((resp: any) => {
      if (resp instanceof NavigationEnd) {
        this.activeRoute = resp.url === '/tms';
      }
    });
  }
}
