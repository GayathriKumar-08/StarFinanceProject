import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewloginpageComponent } from './newloginpage.component';

describe('NewloginpageComponent', () => {
  let component: NewloginpageComponent;
  let fixture: ComponentFixture<NewloginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewloginpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewloginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
