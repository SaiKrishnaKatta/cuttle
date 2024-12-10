import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private route: Router, 
    private _fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this._fb.group({
      areaCode: ['', Validators.required],
      phone: ['', Validators.required],
      smsOtp: ['']
    });
  }

  onSetNewPswd() {
    // const element = document.getElementsByClassName('form-group') as HTMLAllCollection<any>;
    // console.log(element);
    // if (element.length) {
    //   element.forEach(() => {

    //   })
    //   element.classList.add("mystyle");
    // }
    if (this.form.valid) { 
      this.route.navigate(['auth/set-new-login-pwd'], {
        state: { phone: this.form.get('phone')?.value, smsOtp: this.form.get('smsOtp')?.value },
      });
    }
  }
  onRegister() {
    this.route.navigate(['auth/register']);
  }

  onSendOTP() {
    const payload = this.form.value;
    delete payload.smsOtp;
    this.authService
      .sendOtp(payload, Constants.SMS_PASSWORD_VERIFICATION_CODE)
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
