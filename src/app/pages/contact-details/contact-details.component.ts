import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import ContactModel from 'src/app/models/contact.model';
import UserModel from 'src/app/models/user.model';
import TransferModel from 'src/app/models/transfer.model';
import { ContactService } from 'src/app/services/contact-service/contact.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  contact: ContactModel;
  user: UserModel;
  transfers: TransferModel[];
  contactSubscriber: Subscription;
  userSubscriber: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    public contactService: ContactService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.contactSubscriber = this.contactService.getContactById(id).subscribe(contact => { this.contact = contact });
      this.userSubscriber = this.userService.user$.subscribe(user => {
        this.user = user
        this.transfers = this.user.transfers.filter(transfer => {
          return transfer.toId === this.contact._id
        })
      })
    })
  }

  ngOnDestroy() :void {
    this.contactSubscriber.unsubscribe();
    this.userSubscriber.unsubscribe();
  }

  goBack(){
    this.router.navigate(['/contact']);
  }

  editContact(){
    this.router.navigate(['/contact/edit', this.contact._id]);
  }
}