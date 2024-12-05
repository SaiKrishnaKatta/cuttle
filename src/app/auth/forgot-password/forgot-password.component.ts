import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private route: Router, 
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this._fb.group({
      areaCode: ['', Validators.required],
      phone: ['', Validators.required],
      smsOtp: ['', Validators.required]
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
        state: { phone: this.form.value.phone, smsOtp: this.form.value.smsOtp },
      });
    }
  }
  onRegister() {
    this.route.navigate(['auth/register']);
  }
}
