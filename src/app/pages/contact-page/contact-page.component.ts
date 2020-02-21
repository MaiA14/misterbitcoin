import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import ContactModel from '../../models/contact.model';
import { ContactService } from '../../services/contact-service/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contacts$: Observable<ContactModel[]>

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.loadContacts(null);
    this.contacts$ = this.contactService.contacts$
  }

  onFilter(filterBy) :void {
    this.contactService.loadContacts(filterBy);
  }

}
