import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinTransferComponent } from './bitcoin-transfer.component';

describe('BitcoinTransferComponent', () => {
  let component: BitcoinTransferComponent;
  let fixture: ComponentFixture<BitcoinTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
