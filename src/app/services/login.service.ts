import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenResponse } from '../interfaces/TokenResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginURL = "/api/v1alpha/login"
  private accessToken: string = "";
  private refreshToken: string = "";

  constructor(
    private http: HttpClient) { }


  login(username: string, password: string): Observable<TokenResponse> {
    const body = new HttpParams()
    .set('username', username)
    .set('password', password);

    const response = this.http.post<TokenResponse>(this.loginURL,
      body,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );

    response.subscribe(tokens => {
      this.accessToken = tokens.access_token;
      this.refreshToken = tokens.refresh_token;
    }, error => {

    })

    return response;
  }

  isLoggedIn(): boolean {
    return (this.accessToken !== "");
  }
}
