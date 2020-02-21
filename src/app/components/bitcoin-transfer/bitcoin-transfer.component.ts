import { Component, OnInit, Input } from '@angular/core';
import ContactModel from 'src/app/models/contact.model';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-bitcoin-transfer',
  templateUrl: './bitcoin-transfer.component.html',
  styleUrls: ['./bitcoin-transfer.component.scss']
})
export class BitcoinTransferComponent implements OnInit {

  @Input() contact: ContactModel;
  amount: number;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(){
    this.userService.addTransfer(this.contact, this.amount)
  }

}
