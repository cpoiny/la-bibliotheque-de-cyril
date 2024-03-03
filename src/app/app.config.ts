import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { IMAGE_CONFIG } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    // add this provider to use httpClient instead of the ngModule + add withFetch because there was a warning otherwise
    provideHttpClient(withFetch()),
    // permet de reduire les dimensions de rendu d'image pour optimiser la performance -> image placeholder readerFile dans le formulaire back office
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true, 
        disableImageLazyLoadWarning: true
      }
    },

  ]
};
