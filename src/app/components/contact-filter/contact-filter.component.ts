import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  @Output() onFilter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onFilterChange(filterBy){
    this.onFilter.emit(filterBy);
  } 
}
