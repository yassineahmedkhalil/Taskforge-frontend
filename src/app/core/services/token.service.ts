import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  tokenKey: string = 'token';
  refreshTokenKey: string = 'refreshToken';
  constructor() {}

  saveToken(token: string) {
    sessionStorage.setItem(this.tokenKey, token);
  }

  deleteToken() {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.refreshTokenKey);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  saveRefreshToken(refreshToken: string) {
    sessionStorage.setItem(this.refreshTokenKey, refreshToken);
  }
  isLoggedIn() {
    const token = this.getToken();
    if (!token) return false;
    const tokenInfo = this.getDecodeAccessToken(token);
    return tokenInfo?.exp > Date.now() / 1000;
  }
  getDecodeAccessToken(token: string) {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch {
      return null;
    }
  }
}
