import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplenavComponent } from './samplenav.component';

describe('SamplenavComponent', () => {
  let component: SamplenavComponent;
  let fixture: ComponentFixture<SamplenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
