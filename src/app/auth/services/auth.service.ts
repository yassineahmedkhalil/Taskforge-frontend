import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

interface TokenResponse{
  token?: string;
  refreshToken?: string;
}

export interface UserDto {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = "https://localhost:7177/api/Auth";

  constructor(private http: HttpClient) { }

  login(userRequest: UserDto): Observable<TokenResponse>{
    return this.http.post(`${this.api}/login`, userRequest)
      .pipe(
        tap(response => {
          if(response.token) {
            console.log(response);
          }
        })
      );
  }
}
