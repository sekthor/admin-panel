import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenResponse } from '../interfaces/TokenResponse';
import { JwtService } from './jwt.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private backendURL = "/api/v1alpha/"

  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private jwt: JwtService) { }


  login(username: string, password: string): Observable<boolean> {
    let observable = new Observable<boolean>(subscriber => {
      this.getTokens(username, password).subscribe(tokens => {
        this.storage.put("accessToken", tokens.access_token);
        this.storage.put("refreshToken", tokens.refresh_token);
        subscriber.next(true)
      },
      error => {
        subscriber.next(false);
      })
    })
    return observable;
  }

  getTokens(username: string, password: string): Observable<TokenResponse> {
    const body = new HttpParams()
    .set('username', username)
    .set('password', password);

    return this.http.post<TokenResponse>(`${this.backendURL}/login`,
      body, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }

  isLoggedIn(): boolean {
    return this.jwt.getAccessToken() !== null;
  }

  validateToken(token: string) {
    return this.http.post(`${this.backendURL}/token/validate`, {"token" : token })
  }

  

}
