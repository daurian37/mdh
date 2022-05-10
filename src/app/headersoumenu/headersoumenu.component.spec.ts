import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersoumenuComponent } from './headersoumenu.component';

describe('HeadersoumenuComponent', () => {
  let component: HeadersoumenuComponent;
  let fixture: ComponentFixture<HeadersoumenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadersoumenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersoumenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
