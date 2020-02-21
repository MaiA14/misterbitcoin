import { Component, OnInit, Input } from '@angular/core';
import TransferModel from '../../models/transfer.model'

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss']
})
export class TransferListComponent implements OnInit {

  @Input() transfers: TransferModel[]
  @Input() title: string = 'Your last 3 Transactions'
  numOfTransactionToDisplay: number = 3

  constructor() {}

  ngOnInit(): void {
    if (this.title !== 'Your last 3 Transactions') {
      this.numOfTransactionToDisplay = this.transfers.length
    }
  }

}
