import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.guard';
import { HelpCenterComponent } from './help-center/help-center.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)
      },
      {
        path: 'landing',
        loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'help-center',
        component: HelpCenterComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      }
      
];
