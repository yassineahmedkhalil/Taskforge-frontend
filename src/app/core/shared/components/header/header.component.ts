import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private tokenService = inject(TokenService);
  private router = inject(Router);
  logout()
  {
    this.tokenService.deleteToken();
    this.router.navigate(['/auth']);
  }
}
