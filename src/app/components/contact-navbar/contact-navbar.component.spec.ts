import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNavbarComponent } from './contact-navbar.component';

describe('ContactNavbarComponent', () => {
  let component: ContactNavbarComponent;
  let fixture: ComponentFixture<ContactNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
