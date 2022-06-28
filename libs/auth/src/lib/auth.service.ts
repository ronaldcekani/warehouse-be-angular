import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Authenticate, PasswordReset} from "@warehouse-management/auth";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private client: HttpClient) {}

  login(authenticate: Authenticate): Observable<any> {
    return this.client.post('http://localhost:3000/login', authenticate);
  }

  logout() {
    return this.client.post('http://localhost:3000/logout', {});
  }

  requestPasswordReset(email: string) {

  }

  resetPassword(data: PasswordReset) {

  }
}
