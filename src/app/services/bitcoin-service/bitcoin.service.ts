import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const MARKET_PRICE_API = 'https://api.blockchain.info/charts/market-price?timespan=2months&format=json&cors=true';
const DAILY_TRANS_API = 'https://api.blockchain.info/charts/n-transactions?&timestamp=2months&format=json&cors=true';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) {}

  getBitCoinRate(amount: number) {
    return this.http.get<number>(`https://blockchain.info/tobtc?currency=USD&value=${amount}`);
  }

  getMarketPrice() {
    return this.http.get<any>(MARKET_PRICE_API);
  }

  getConfirmedTransactions() {
    return this.http.get<any>(DAILY_TRANS_API);
  }
}