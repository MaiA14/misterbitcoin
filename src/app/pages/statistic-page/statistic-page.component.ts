import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin-service/bitcoin.service'

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  marketPriceChart = {
    type: 'LineChart',
    columnNames: ['Date', 'Market Price'],
    options:
    {
      colors: ['#ed4d6e'],
      curveType: 'function',
      legend: { textStyle: { color: 'white' } },
      backgroundColor: 'transparent',
      hAxis: { textStyle: { color: 'white' } },
      vAxis: { textStyle: { color: 'white' } },
      animation: {
        duration: 1000,
        easing: 'ease-int-out',
        startup: true
      }
    }
  }
  dailyTransChart = {
    type: 'LineChart',
    columnNames: ['Date', 'Daily Transactions'],
    options:
    {
      colors: ['#ed4d6e'],
      curveType: 'function',
      legend: { textStyle: { color: 'white' } },
      backgroundColor: 'transparent',
      hAxis: { textStyle: { color: 'white' } },
      vAxis: { textStyle: { color: 'white' } },
      animation: {
        duration: 1000,
        easing: 'ease-int-out',
        startup: true
      }
    }
  }

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.loadDailyTransactionData();
    this.loadMarketPriceData()
  }

  loadMarketPriceData(): void {
    this.bitcoinService.getMarketPrice()
      .subscribe(data => this.formatData(data, this.marketPriceChart))
  }

  loadDailyTransactionData(): void {
    this.bitcoinService.getConfirmedTransactions()
      .subscribe(data => this.formatData(data, this.dailyTransChart))
  }

  formatData(data, chart) {
    const dataToDisplay = data['values'].map(currData => {
      let d = new Date(currData.x * 1000);
      let date = d.toDateString();
      return [
        date, currData.y
      ]
    })
    chart.data = dataToDisplay
  }

}
