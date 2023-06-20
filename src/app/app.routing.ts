import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const rootRouterConfig: Routes = [
  {
<<<<<<< HEAD
    path:'',
    redirectTo:'sessions/signin',
=======
    path: '',
    redirectTo: 'sessions/signin',
>>>>>>> prueba-casa
    pathMatch: 'full'

  },
  // {
  //   path: '',
  //   redirectTo: 'others/blank',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Session' }
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule),
        data: { title: 'Profile', breadcrumb: 'PROFILE' }
      },
      // {
      //   path: 'dashboard',
      //   loadChildren: () => ('./views/dashboard/dashboard').then(m => m.DashboardViewModule),
      //    data: {     title: 'dashboard', breadcrumb: 'DASHBOARD'  }
      // },
      {
        path: 'others',
        loadChildren: () => import('./views/others/others.module').then(m => m.OthersModule),
        data: { title: 'Others', breadcrumb: 'OTHERS' }
      },
      {
        path: 'search',
        loadChildren: () => import('./views/search-view/search-view.module').then(m => m.SearchViewModule)
      },

    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];

