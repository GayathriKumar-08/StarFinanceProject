import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldloancalcComponent } from './goldloancalc.component';

describe('GoldloancalcComponent', () => {
  let component: GoldloancalcComponent;
  let fixture: ComponentFixture<GoldloancalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldloancalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldloancalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
