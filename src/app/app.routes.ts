import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.page'; // This is fine to import directly

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:city',
    loadComponent: () =>
      import('./details/details.page').then(m => m.DetailsPage)
  },
  {
    path: '**',
    redirectTo: '', // Redirect unknown routes to home
    pathMatch: 'full'
  }
];
