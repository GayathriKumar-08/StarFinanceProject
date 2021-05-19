import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDataPreviewComponent } from './loan-data-preview.component';

describe('LoanDataPreviewComponent', () => {
  let component: LoanDataPreviewComponent;
  let fixture: ComponentFixture<LoanDataPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDataPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDataPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
