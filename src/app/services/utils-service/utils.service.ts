import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {}
  
  public setId(): string {
    var txt = ''
    let length = 10;
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
  }
}
