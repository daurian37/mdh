import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacieligneComponent } from './pharmacieligne.component';

describe('SiteComponent', () => {
  let component: PharmacieligneComponent;
  let fixture: ComponentFixture<PharmacieligneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacieligneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacieligneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
