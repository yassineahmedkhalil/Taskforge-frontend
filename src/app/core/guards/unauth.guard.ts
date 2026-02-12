import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

export const unauthGuard: CanMatchFn = () => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  return tokenService.isLoggedIn()
  ? router.createUrlTree(['/dashboard'])
  : true;
};
