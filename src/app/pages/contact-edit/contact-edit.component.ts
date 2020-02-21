import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import ContactModel from 'src/app/models/contact.model';
import { ContactService } from '../../services/contact-service/contact.service'

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit, OnDestroy {

  editableContact: ContactModel
  contactForm: FormGroup;
  paramSubscriber: Subscription
  contactSubscriber: Subscription

  constructor(
    private route: ActivatedRoute,
    public contactService: ContactService,
    private router: Router
    ) {}

  ngOnInit() :void {
    this.editableContact = this.contactService.getEmptyContact();
    this.paramSubscriber = this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.contactSubscriber = this.contactService.getContactById(id).subscribe
        (contact => {
          this.editableContact.name = contact.name
          this.editableContact.email = contact.email
          this.editableContact.phone = contact.phone
          this.editableContact._id = contact._id
        })
      }
    })
  }

  ngOnDestroy() : void {
    this.paramSubscriber.unsubscribe()
    this.contactSubscriber?.unsubscribe()
  }

  goBack() :void {
    if (this.editableContact._id) {
      this.router.navigate(['/contact', this.editableContact._id])
    } else {
      this.router.navigate(['/contact'])
    }
  }

  saveContact() :void {
    this.contactService.saveContact(this.editableContact)
    this.router.navigate(['contact'])
  }

  deleteContact() :void {
    this.contactService.deleteContact(this.editableContact._id)
    this.router.navigate(['contact'])
  }

  inputChange(event) :void {
    const field = event.target.name
    const value = event.target.value
    this.editableContact[field] = value
  }
}