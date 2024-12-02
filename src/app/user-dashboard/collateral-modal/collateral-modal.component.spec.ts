import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateralModalComponent } from './collateral-modal.component';

describe('CollateralModalComponent', () => {
  let component: CollateralModalComponent;
  let fixture: ComponentFixture<CollateralModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateralModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollateralModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
