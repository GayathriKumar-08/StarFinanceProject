import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycrulebookComponent } from './kycrulebook.component';

describe('KycrulebookComponent', () => {
  let component: KycrulebookComponent;
  let fixture: ComponentFixture<KycrulebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycrulebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycrulebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
