import { Routes } from '@angular/router';
import { AuthTogglePageComponent } from './app/auth/auth-toggle-page/auth-toggle-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'auth',component: AuthTogglePageComponent, loadChildren: () => import('./app/auth/auth.routes').then(m => m.AUTH_ROUTES) }
];
