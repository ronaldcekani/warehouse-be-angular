import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: [
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
  ],
  exports: [LoginComponent, ForgetPasswordComponent, ResetPasswordComponent],
  providers: [],
})
export class AuthModule {}
