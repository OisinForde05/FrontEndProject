import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.page';
import { DetailsPage } from './details/details.page';

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
    redirectTo: '',  // Redirect unknown routes to the home page
    pathMatch: 'full'
  }
];
