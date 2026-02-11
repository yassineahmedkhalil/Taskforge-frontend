import { Component } from '@angular/core';
import { TokenService } from '../auth/services/token.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private tokenService: TokenService){}


  showTokenInfo()
  {
    console.log(this.tokenService.isLoggedIn());
  }
  clearToken()
  {
    this.tokenService.deleteToken();
  }
}
