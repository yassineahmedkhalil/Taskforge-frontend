import { Routes } from '@angular/router';
import { AuthTogglePageComponent } from './auth/auth-toggle-page/auth-toggle-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth',component: AuthTogglePageComponent, loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES) }
];
