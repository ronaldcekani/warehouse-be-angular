import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Authenticate, AuthService} from '@warehouse-management/auth';
@Component({
  selector: 'warehouse-management-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log("Submit login: ", this.loginForm.value);
    this.authService.login(this.loginForm.value as Authenticate).subscribe(result => {});
  }
}
