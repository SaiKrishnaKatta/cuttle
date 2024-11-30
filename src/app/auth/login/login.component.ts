import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  constructor(
    private route: Router,
    private _fb: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this._fb.group({
      areaCode: '',
      phone: '',
      password: ''
    })
  }
  onSignIn() {
    if (this.loginForm.valid) {
      const payload = this.loginForm.value;
      delete payload['areaCode'];
      this.loginService.onLogin(payload).subscribe((res) => {
        this.route.navigate(['/dashboard']);
      })
    }
  }

  onRegister() {
    this.route.navigate(['auth/register']);
  }

  onForgotPassword() {
    this.route.navigate(['auth/forgot-password']);
  }
}
