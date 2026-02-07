import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TokenService } from './token.service';

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
  private api = "https://localhost:7177/api/Auth";

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(userRequest: UserDto): Observable<TokenResponse>{
    return this.http.post(`${this.api}/login`, userRequest)
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

  register(userRequest: UserDto): Observable<any>{
    return this.http.post(`${this.api}/register`, userRequest)
    .pipe(
      tap(response => {
        console.log(response);
      })
    )
  }
}
