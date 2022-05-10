import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilsiteComponent } from './acceuilsite.component';

describe('AcceuilsiteComponent', () => {
  let component: AcceuilsiteComponent;
  let fixture: ComponentFixture<AcceuilsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
