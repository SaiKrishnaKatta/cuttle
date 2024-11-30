import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNewLoginPwdComponent } from './set-new-login-pwd.component';

describe('SetNewLoginPwdComponent', () => {
  let component: SetNewLoginPwdComponent;
  let fixture: ComponentFixture<SetNewLoginPwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetNewLoginPwdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetNewLoginPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
