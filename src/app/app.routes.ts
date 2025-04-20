import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:city',
    loadComponent: () => import('./details/details.page').then(m => m.DetailsPage)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
