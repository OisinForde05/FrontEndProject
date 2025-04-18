import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.page';
import { DetailsPage } from './details/details.page';

export const routes: Routes = [
  // Home route, points to HomePage
  {
    path: '',
    component: HomeComponent
  },
  
  // Details route, which uses a parameter for city
  {
    path: 'details/:city',
    loadComponent: () => import('./details/details.page').then(m => m.DetailsPage)
  },

  // Fallback route if no match
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'details',
    loadComponent: () => import('./details/details.page').then( m => m.DetailsPage)
  }
];
