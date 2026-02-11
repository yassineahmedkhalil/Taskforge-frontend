import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TokenService } from './token.service';
import { environment } from '../../../environments/environment';

interface TokenResponse{
  accessToken?: string;
  refreshToken?: string;
}

export interface UserDto {
  username: string;
  email?: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  private readonly AUTH_API = 'auth';
  login(userRequest: UserDto): Observable<TokenResponse>{
    return this.http.post(`${environment.apiUrl}${this.AUTH_API}/login`, userRequest)
      .pipe(
        tap(response => {
          if(response.accessToken) {
            this.tokenService.saveToken(response.accessToken);
            if(response.refreshToken)
            {
              this.tokenService.saveRefreshToken(response.refreshToken);
            }
          }
        })
      );
  }

  register(userRequest: UserDto): Observable<TokenResponse>{
    return this.http.post(`${environment.apiUrl}${this.AUTH_API}/register`, userRequest)
    .pipe(
      tap(response => {
        console.log(response);
      })
    )
  }
}
