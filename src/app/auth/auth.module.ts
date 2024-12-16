import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetNewLoginPwdComponent } from './set-new-login-pwd/set-new-login-pwd.component';
import { WebSDKComponent } from './webSDK.component';

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SetNewLoginPwdComponent,
    WebSDKComponent
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, FormsModule],
})
export class AuthModule {}
