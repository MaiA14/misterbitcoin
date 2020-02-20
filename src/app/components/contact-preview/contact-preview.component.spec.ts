import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPreviewComponent } from './contact-preview.component';

describe('ContactPreviewComponent', () => {
  let component: ContactPreviewComponent;
  let fixture: ComponentFixture<ContactPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
