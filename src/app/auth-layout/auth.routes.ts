import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { unauthGuard } from '../core/guards/unauth.guard';

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: LoginComponent,canMatch: [unauthGuard] },
  { path: 'register', component: RegisterComponent, canMatch: [unauthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
