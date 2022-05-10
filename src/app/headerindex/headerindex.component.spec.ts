import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderindexComponent } from './headerindex.component';

describe('HeaderindexComponent', () => {
  let component: HeaderindexComponent;
  let fixture: ComponentFixture<HeaderindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
