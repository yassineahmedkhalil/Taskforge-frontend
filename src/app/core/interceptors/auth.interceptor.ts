import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { TokenService } from '../services/token.service';

const AUTH_EXCLUDED_URLS = ['/auth/login', '/auth/register'];

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (AUTH_EXCLUDED_URLS.some((url) => req.url.includes(url))) {
    return next(req);
  }
  const authToken = inject(TokenService).getToken();
  if (!authToken) {
    return next(req);
  }
  if (!req.url.startsWith(environment.apiUrl)) {
    return next(req);
  }

  const newReq = req.clone({
    setHeaders: { Authorization: `Bearer ${authToken}` },
  });
  return next(newReq);
};
