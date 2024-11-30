import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundSecurityComponent } from './fund-security.component';

describe('FundSecurityComponent', () => {
  let component: FundSecurityComponent;
  let fixture: ComponentFixture<FundSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundSecurityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
