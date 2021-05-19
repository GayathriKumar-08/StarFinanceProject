import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsectionComponent } from './navsection.component';

describe('NavsectionComponent', () => {
  let component: NavsectionComponent;
  let fixture: ComponentFixture<NavsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
