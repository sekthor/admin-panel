import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(
    private storage: StorageService
  ) { }

    getAccessToken(): string | null {
      return this.storage.get("accessToken");
    }

    setAccessToken(token: string): void {
      this.storage.put("accessToken", token);
    }

    getRefreshToken(): string | null {
       return this.storage.get("refreshToken");
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
