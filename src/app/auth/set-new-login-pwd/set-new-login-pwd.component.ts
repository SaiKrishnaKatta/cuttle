import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-set-new-login-pwd',
  standalone: true,
  imports: [],
  templateUrl: './set-new-login-pwd.component.html',
  styleUrl: './set-new-login-pwd.component.scss'
})
export class SetNewLoginPwdComponent {
  constructor(
    private route: Router,
    private location: Location
  ) {}
  onConfirm() {
    this.route.navigate(['auth/login']);
  }
  onReturn() {
   this.location.back();
  }
}
