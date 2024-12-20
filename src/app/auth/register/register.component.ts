import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  showhidePswd: string = 'password';

  constructor(
    private route: Router,
    private authService: AuthService,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onShowPswd() {
    this.showhidePswd = this.showhidePswd === 'text' ? 'password' : 'text';
  }

  initForm() {
    this.registerForm = this._fb.group({
      areaCode: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      termsAndConditions: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      const payload = {
        password: this.registerForm.get('password')?.value,
        phone: this.registerForm.get('phone')?.value,
        areaCode: this.registerForm.get('areaCode')?.value,
        role: 'USER',
        country: 'IN',
        userType: 'INDIVIDUAL',
      };
      this.authService.onSignUp(payload).subscribe(
        (res) => {
          sessionStorage.setItem('userId', res.data.id)
          this.onSendOTP();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  onBack() {
    this.route.navigate(['auth/login']);
  }

  onSendOTP() {
    this.authService
      .sendOtp(this.registerForm.value, Constants.REGISTER_SMS_OTP)
      .subscribe(
        (res) => {
          console.log('OTP sent to user!!');
          this.route.navigate(['auth/register/verify-otp'], {
            state: { phone: this.registerForm.get('phone')?.value, areaCode: this.registerForm.get('areaCode')?.value }
          });
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
