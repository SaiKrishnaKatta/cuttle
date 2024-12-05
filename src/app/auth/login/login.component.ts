import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CommonService } from '../../services/common/common.service';
import { Constants } from '../../models/constants';
import { OTPRequest } from '../../models/otpRequest.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  smsOtp: string = '';
  showOPTVerify = false;

  constructor(
    private route: Router,
    private _fb: FormBuilder,
    private authService: AuthService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this._fb.group({
      areaCode: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSignIn() {
    if (this.loginForm.valid) {
      const payload = this.loginForm.value;
      delete payload['areaCode'];
      this.authService.onLogin(payload).subscribe((res) => {
        if (res && res.body.data && res.body.data.BearerToken) {
          this.commonService.isUserLoggedInSub.next(true);
          this.route.navigate(['/dashboard']);
        } else {
          this.showOPTVerify = true;
        }
      }, (error) => {
        console.error(error);
      })
    }
  }

  submitOTP() {
    console.log(this.smsOtp.length);
    if (this.smsOtp.length === 6) {
      const payload: OTPRequest = {
        phone: this.loginForm.value.phone,
        areaCode: this.loginForm.value.areaCode,
        smsOtp: this.smsOtp
      }
      this.authService
        .verifyOtp(payload, Constants.LOGIN_SMS_OTP)
        .subscribe(
          (res) => {
            this.route.navigate(['/dashboard']);
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }

  onRegister() {
    this.route.navigate(['auth/register']);
  }

  onForgotPassword() {
    this.route.navigate(['auth/forgot-password']);
  }
}
