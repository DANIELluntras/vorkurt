import { Component, OnInit } from '@angular/core';
import { PlBillingService } from '../../../../shared/utils/services/pl-billing/pl-billing.service';
import { IPlBillingData } from '../../../../shared/utils/interfaces/pl-billing/wrapper-pl-billing';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'elix-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  dataCoins: IPlBillingData[] | any = new Array<IPlBillingData>();
  favorites = ['bitcoin', 'solana', 'chainlink', 'ethereum'];

  // dataCoins: any;

  constructor(
    private _plBillingService: PlBillingService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataCoins = this._route.snapshot.data.coins.data.filter((resp: any) =>
      this.favorites.includes(resp.slug)
    );

    this.dataCoins.forEach((resp: IPlBillingData) =>
      resp.metrics.market_data.price_usd.toFixed(2)
    );
  }
}
