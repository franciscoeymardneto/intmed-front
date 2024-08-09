import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {  map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { BrowserStorageService } from './storage.service';
import { ApiLoginResponse } from '../dto/api/login.api.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpService, private storage: BrowserStorageService) {
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<ApiLoginResponse>('/users/login', {
      username,
      password
    }).pipe(
      map( (response) => {
        this.storage.setUserSession({
          username: response.username,
          token: response.token,
          userid: response.userid
        });
        return true
      })
    )
  }

  logout(): void {
    this.storage.clearSession();
  }

  isLoggedIn(): boolean {
    return this.storage.getUserSession() !== null;
  }
}
