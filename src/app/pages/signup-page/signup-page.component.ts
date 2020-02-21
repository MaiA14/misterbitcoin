import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { Observable } from 'rxjs';
import UserModel from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  user$: Observable<UserModel>

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {}

  onSubmit(username) :void {
    this.userService.signup(username);
    this.user$ = this.userService.user$
    this.router.navigate(['home']);
  }

}