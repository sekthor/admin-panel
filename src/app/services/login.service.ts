import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenResponse } from '../interfaces/TokenResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginURL = "/api/v1alpha/login"
  private accessToken = null;
  private refreshToken = null;

  constructor(
    private http: HttpClient) { }

  login(){

  }

  getTokens(username: string, password: string): Observable<TokenResponse> {
    const body = new HttpParams()
    .set('username', username)
    .set('password', password);

  return this.http.post<TokenResponse>(this.loginURL,
    body,
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }
  );
  }
}
