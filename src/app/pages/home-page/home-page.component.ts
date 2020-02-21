import { Component, OnInit, OnDestroy } from '@angular/core';
import UserModel from 'src/app/models/user.model';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user-service/user.service';
import { BitcoinService } from 'src/app/services/bitcoin-service/bitcoin.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  user: UserModel
  userSubscriber: Subscription
  amountValue: number
  amount$: Observable<number>

  constructor(
    private route: ActivatedRoute,
    private bitcoinService: BitcoinService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userSubscriber = this.userService.user$.subscribe(user =>{
      this.user = user;
      this.amount$ = this.bitcoinService.getBitCoinRate(this.user.amount);
    })
  }

  ngOnDestroy(): void {
    this.userSubscriber.unsubscribe();
  }

}
