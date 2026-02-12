import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { DashboardComponent } from './app-layout/dashboard/dashboard.component';
import { authGuard } from './core/guards/auth.guard';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

export const routes: Routes = [
    { 
        path: 'auth',
        component: AuthLayoutComponent, 
        children: [
            {
                path: '',
                loadChildren: () =>
                import('./auth-layout/auth.routes').then(m => m.AUTH_ROUTES),
            },
        ]
    },
    { 
        path: '', 
        component: AppLayoutComponent, 
        canActivateChild: [authGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
    { 
        path: '**', 
        redirectTo: 'auth' 
    }
];