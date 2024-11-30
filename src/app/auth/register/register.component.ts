import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});

  constructor(
    private route: Router,
    private authService: AuthService,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this._fb.group({
      areaCode: '',
      phoneNumber: '',
      verificationCode: '',
      password: '',
      termsAndConditions: ''
    })
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.authService.onSignUp(this.registerForm.value).subscribe((res) => {
        console.log(res);
        this.route.navigate(['/dashboard']);
      })
    }
  }

  onBack() {
    this.route.navigate(['auth/login']);
  }
}
