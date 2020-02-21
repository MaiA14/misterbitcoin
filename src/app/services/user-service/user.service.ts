import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import UserModel from '../../models/user.model'
import ContactModel from '../../models/contact.model';
import { UtilsService } from '../utils-service/utils.service';
import { LocalStorageService } from '../local-storage-service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //mock the server - make it a private variable
  private _user: UserModel

  //private behaviorSubject array of contacts:
  private _user$ = new BehaviorSubject<UserModel>(null)

  //public observable of the private var above
  public user$ = this._user$.asObservable()

  constructor(private localStorageService: LocalStorageService,
    private utilsService: UtilsService) { }

  public signup(username: string): void {
    let user = this.localStorageService.load('loggedIn-user');
    if (!user || user.name !== username) {
      user = {};
      user.name = username;
      user.amount = 100;
      user.transfers = [];
      this.localStorageService.saveToStorage('loggedIn-user', user);
    }
    this._user = user;
    let sortedTransfers = [...this._user.transfers];
    sortedTransfers = this._sortTransfers(sortedTransfers);
    this.localStorageService.saveToStorage('loggedIn-user', this._user);
    this._user$.next(this._user);
  }
  
  public addTransfer(contact: ContactModel, amount: number){
    const newTransfer = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount
    }
    if (((this._user.amount - amount) >= 0) && amount !== 0){
      this._user.amount -= amount;
      this._user.transfers.push(newTransfer);
      let sortedTransfers = [...this._user.transfers];
      sortedTransfers = this._sortTransfers(sortedTransfers);
      this.localStorageService.saveToStorage('loggedIn-user', this._user);
      this._user$.next(this._user);
    }
  }

  public isAuthenticated() {
    const user = this._user$.getValue()
    return (user) ? true : false;
  }
  
  private _sortTransfers(transfers){
    return transfers.sort((transfer1, transfer2) =>{
      if (transfer1.at < transfer2.at)
        return 1;
      else if (transfer1.at > transfer2.at)
        return -1;
      return 0;    
    })
  }
}