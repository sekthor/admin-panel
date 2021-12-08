import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  accessToken: string = "";
  refreshToken: string = "";
  decodedToken: string = "";

  constructor(
    private storage: StorageService
  ) { }

    getAccessToken(): string | null {
      if (!this.accessToken)
        this.accessToken = this.storage.get("accessToken") || "";
      return this.accessToken;
    }

    setAccessToken(token: string): void {
      this.storage.put("accessToken", token);
    }

    getRefreshToken(): string | null {
      if (!this.refreshToken)
        this.refreshToken = this.storage.get("refreshToken") || "";
      return this.refreshToken;
    }

    setRefreshToken(token: string): void {
      this.storage.put("refreshToken", token);
    }

    decodeToken() {

    }

    getDecodeToken() {
    }

    getUser() {
    }

    getUsername() {
    }

    getExpiryTime() {
    }

    isTokenExpired(): boolean {
      return false;
    }
}
