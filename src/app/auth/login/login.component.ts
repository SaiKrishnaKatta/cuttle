import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private route: Router
  ) {}

  onSignIn() {
    this.route.navigate(['/dashboard']);
  }

  onRegister() {
    this.route.navigate(['auth/register']);
  }

  onForgotPassword() {
    this.route.navigate(['auth/forgot-password']);
  }
}
