import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Constants } from '../../models/constants';
import { WebSDKService } from '../webSDK.sevice';

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
    private _fb: FormBuilder,
    private webSdkService: WebSDKService
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
      this.route.navigate(['auth/verify-otp']);
      // this.authService.onSignUp(payload).subscribe(
      //   (res) => {
      //     console.log(res);
          // this.route.navigate(['/dashboard']);
          // this.webSdkService.launchWebSdk('', 'saikrishnakatta69@gmail.com', '+917457413032', 'en');
      //   },
      //   (error) => {
      //     console.error(error);
      //   }
      // );
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
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
