import { bootstrapApplication } from '@angular/platform-browser';
 import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
 import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
 
 import { routes } from './app/app.routes';
 import { AppComponent } from './app/app.component';
 import { DetailsPage } from './app/details/details.page';
import { ErrorHandler, importProvidersFrom } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage-angular';
 
 bootstrapApplication(AppComponent, {
   providers: [
     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     provideIonicAngular(),
     provideRouter(routes, withPreloading(PreloadAllModules)),
     provideRouter(routes, withPreloading(PreloadAllModules)),  // Preload modules

     importProvidersFrom(IonicStorageModule.forRoot()),
     {provide: ErrorHandler },
   ],
 });