import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpinnerStateService } from './shared/component/spinner/spinner-state.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'vorkurt';
  stateSpiner: boolean = false;
  unSubscriptionscrollBar: Subscription;

  constructor(
    private _spinerService: SpinnerStateService,
    private _router: Router
  ) {
    this._spinerService.getState$.subscribe(
      (resp) => (this.stateSpiner = resp)
    );
  }

  ngOnInit(): void {
    this.unSubscriptionscrollBar = this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((res) => window.scrollTo(0, 0));
  }

  ngOnDestroy(): void {
    this.unSubscriptionscrollBar.unsubscribe();
  }
}
