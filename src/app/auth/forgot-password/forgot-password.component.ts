import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  constructor(
    private route: Router
  ) {}

  onSetNewPswd() {
    this.route.navigate(['auth/set-new-login-pwd']);
  }
  onRegister() {
    this.route.navigate(['auth/register']);
  }
}
