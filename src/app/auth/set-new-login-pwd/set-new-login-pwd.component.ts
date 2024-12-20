import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-set-new-login-pwd',
  templateUrl: './set-new-login-pwd.component.html',
  styleUrl: './set-new-login-pwd.component.scss',
})
export class SetNewLoginPwdComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({});
  showhideOld: string = 'password';
  showhideNew: string = 'password';

  constructor(
    private route: Router,
    private location: Location,
    private authService: AuthService,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    if ( !window.history.state.phone || !window.history.state.smsOtp ) {
      this.route.navigate(['auth/forgot-password']);
    }
    this.initForm();
  }
  initForm() {
    this.form = this._fb.group({
      oldPwd: '',
      newPwd: '',
    });
  }
  onConfirm() {
    if (this.form.valid) {
      const payload = {
        phone: window.history.state.phone,
        smsOtp: window.history.state.smsOtp,
        oldPwd: this.form.get('oldPwd')?.value,
        newPwd: this.form.get('newPwd')?.value,
      };
      this.authService.resetPassword(payload).subscribe((res) => {
        this.route.navigate(['auth/login']);
      }, (error) => {
        console.error(error);
      });
    }
  }
  onReturn() {
    this.location.back();
  }

  onShow(type: string) {
    if (type === 'OLD') {
      this.showhideOld = this.showhideOld === 'text' ? 'password' : 'text';
    } else {
      this.showhideNew = this.showhideNew === 'text' ? 'password' : 'text';
    }
  }

  ngOnDestroy(): void {
    window.history.pushState({phone: undefined, smsOtp: undefined}, '');
  }
}
