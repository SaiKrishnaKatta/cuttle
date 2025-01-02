import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CommonService } from '../../services/common/common.service';
import { Constants, KycStatus, PATTERNS } from '../../models/constants';
import { OTPRequest } from '../../models/otpRequest.model';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  smsOtp: string = '';
  showOTPVerify = false;
  showhidePswd = 'password';
  countries: Array<any> = [];
  countryCodes: Array<any> = [];
  countryCode: string = Constants.COUNTRY_CODE;

  constructor(
    private route: Router,
    private _fb: FormBuilder,
    private authService: AuthService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.countryCodes = this.commonService.getAllCountries();
    this.initForm();
  }

  initForm() {
    this.loginForm = this._fb.group({
      areaCode: ['', Validators.required],
      phone: [
        '',
        [Validators.required, Validators.pattern(PATTERNS.PHONE_NUMBER_REGEX)],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern(PATTERNS.PASSWORD_REGEX)],
      ],
    });
  }
  onSignIn() {
    if (this.loginForm.valid) {
      this.authService.onLogin(this.loginForm.value).subscribe(
        (res) => {
          if (res && res.data && res.data.BearerToken) {
            const token = this.getDecodedAccessToken(res.data.BearerToken);
            const status = token?.KycStatus;
            console.log('%%%%%%%%%', status);
            if (status === KycStatus.REVIEW) {
              this.commonService.generateKYCToken(this.loginForm.get('phone')?.value);
            } else if (status === KycStatus.PENDING) {
              console.log('%%%%%%%%%', res.data);
              this.applyCard(res.data.BearerToken);
            } else if (status === KycStatus.APPROVED) {
              this.commonService.isUserLoggedInSub.next(true);
              this.route.navigate(['/dashboard']);
            } else {
              alert('Failed to login try again!!');
              sessionStorage.clear();
            }
          } else {
            this.showOTPVerify = true;
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  applyCard(token: string) {
    this.authService.onApplyCard(token).subscribe((res) => {
      console.log('Applied Card Successfully!!');
      this.commonService.isUserLoggedInSub.next(true);
      this.route.navigate(['/dashboard']);
    }, (err) => {
      console.error(err);
    })
  }

  submitOTP() {
    if (this.smsOtp.length === 6) {
      const payload: OTPRequest = {
        phone: this.loginForm.get('phone')?.value,
        areaCode: this.loginForm.get('areaCode')?.value,
        smsOtp: this.smsOtp,
      };
      this.authService.verifyOtp(payload, Constants.LOGIN_SMS_OTP).subscribe(
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

  onShowPswd() {
    this.showhidePswd = this.showhidePswd === 'text' ? 'password' : 'text';
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (Error) {
      return null;
    }
  }
}
