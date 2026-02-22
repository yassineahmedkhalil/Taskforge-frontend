import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TokenService } from '../../core/services/token.service';

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

  private readonly LOGIN_API_URL = environment.apiUrl+'auth/login';
  private readonly REGISTER_API_URL = environment.apiUrl+'auth/register';

  login(userRequest: UserDto): Observable<TokenResponse>{
    return this.http.post(`${this.LOGIN_API_URL}`, userRequest)
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
    return this.http.post(`${this.REGISTER_API_URL}`, userRequest)
    .pipe(
      tap(response => {
        console.log(response);
      })
    )
  }
}
