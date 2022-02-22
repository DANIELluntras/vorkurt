import { Injectable } from '@angular/core';
import { IWrapperPlBilling } from '../../interfaces/pl-billing/wrapper-pl-billing';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlBillingService {
  private _walletInformation: BehaviorSubject<IWrapperPlBilling> =
    new BehaviorSubject<IWrapperPlBilling>({} as IWrapperPlBilling);
  walletData$ = this._walletInformation.asObservable();

  constructor(private _http: HttpClient) {}

  dataNextCoins() {
    return this._http.get<IWrapperPlBilling>(
      'https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd'
    );
  }
}
