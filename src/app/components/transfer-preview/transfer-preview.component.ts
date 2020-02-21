import { Component, OnInit, Input } from '@angular/core';
import TransferModel from '../../models/transfer.model'

@Component({
  selector: 'app-transfer-preview',
  templateUrl: './transfer-preview.component.html',
  styleUrls: ['./transfer-preview.component.scss']
})
export class TransferPreviewComponent implements OnInit {

  @Input() transfer: TransferModel;
  date

  constructor() { }

  ngOnInit(): void {
    this.date = new Date(this.transfer.at).toLocaleDateString() + ' ' + new Date(this.transfer.at).toLocaleTimeString()
  }

}
