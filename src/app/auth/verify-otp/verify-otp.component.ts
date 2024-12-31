import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Constants } from '../../models/constants';
import { OTPRequest } from '../../models/otpRequest.model';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../../services/common/common.service';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.scss',
})
export class VerifyOtpComponent implements OnInit {
  smsOtp: any;
  constructor(private authService: AuthService, private router: Router, private commonService: CommonService) {}

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
          const state: any = payload;
          state['password'] = window.history.state.password;
          delete state.smsOtp;
          this.commonService.generateKYCToken(window.history.state.phone, state);
        }
      });
  }
}
