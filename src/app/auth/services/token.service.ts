import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  tokenKey: string = 'token';
  refreshTokenKey: string ='refreshToken';
  constructor() { }

  saveToken(token: string){
    sessionStorage.setItem(this.tokenKey, token);
  }

  deleteToken()
  {
    sessionStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null
  {
    return sessionStorage.getItem(this.tokenKey);
  }

  saveRefreshToken(refreshToken: string)
  {
    sessionStorage.setItem(this.refreshTokenKey, refreshToken)
  }

}
