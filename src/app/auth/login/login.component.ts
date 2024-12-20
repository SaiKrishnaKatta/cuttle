import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CommonService } from '../../services/common/common.service';
import { Constants, PATTERNS } from '../../models/constants';
import { OTPRequest } from '../../models/otpRequest.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  smsOtp: string = '';
  showOPTVerify = false;
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
    this.getAllCountries();
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
            this.commonService.isUserLoggedInSub.next(true);
            this.route.navigate(['/dashboard']);
          } else {
            this.showOPTVerify = true;
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
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

  getAllCountries() {
    this.authService.getCountries().subscribe(
      (res: any) => {
        const data = res.data.length ? res.data : [];
        this.countries = data?.sort((a: any, b: any) => {
          const x = a.phone_code[0].replace('+', '').replace('-', '');
          const y = b.phone_code[0].replace('+', '').replace('-', '');
          return x - y;
        });
        this.countries.forEach((country) => {
          if (!this.countryCodes.includes(country.phone_code[0])) {
            this.countryCodes.push(country.phone_code[0]);
          }
        })
        // this.countries.filter((item, index, self) => {
        //   return self.indexOf(item.phone_code[0]) == index;
        // });
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
