import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepnoComponent } from './changepno.component';

describe('ChangepnoComponent', () => {
  let component: ChangepnoComponent;
  let fixture: ComponentFixture<ChangepnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
