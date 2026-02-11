import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TokenService } from './auth/services/token.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  tokenService = inject(TokenService);
  router = inject(Router);

  ngOnInit() {
    this.tokenService.isLoggedIn()
      ? this.router.navigate(['/dashboard'])
      : this.router.navigate(['/auth']);
  }
}
