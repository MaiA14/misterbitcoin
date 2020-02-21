import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import ContactModel from '../../models/contact.model'

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  @Input() contact: ContactModel;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  contactClick() :void {
    this.router.navigate(['/contact', this.contact._id])
  }
}