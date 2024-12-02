import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateralInjectionComponent } from './collateral-injection.component';

describe('CollateralInjectionComponent', () => {
  let component: CollateralInjectionComponent;
  let fixture: ComponentFixture<CollateralInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateralInjectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollateralInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
