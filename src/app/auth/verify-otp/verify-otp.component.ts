import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Constants } from '../../models/constants';
import { OTPRequest } from '../../models/otpRequest.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.scss',
})
export class VerifyOtpComponent implements OnInit {
  smsOtp: any;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onBack() {
    this.router.navigate(['auth/register']);
  }

  onVerify() {
    const payload: OTPRequest = {
      phone: window.history.state.phone,
      areaCode: window.history.state.areaCode,
      smsOtp: this.smsOtp,
    };
    this.authService
      .verifyOtp(payload, Constants.REGISTER_SMS_OTP)
      .subscribe((res) => {
        if (res && res.status == 200) {
          this.generateKYCToken();
        }
      });
  }

  generateKYCToken() {
    this.authService.generateKYCToken().subscribe(
      (res) => {
        if (res.data && res.data.token) {
          this.router.navigate(['/launch-sdk'], {
            state: {
              sdkToken: res.data.token,
              phone: window.history.state.phone,
            },
          });
        }
      },
      (error) => {}
    );
  }
}
