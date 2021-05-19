import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldloanformComponent } from './goldloanform.component';

describe('GoldloanformComponent', () => {
  let component: GoldloanformComponent;
  let fixture: ComponentFixture<GoldloanformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldloanformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldloanformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
