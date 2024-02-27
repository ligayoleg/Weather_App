import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
//import {ErrorInterceptor} from './common/interceptors/error-interceptor';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    importProvidersFrom(HttpClientModule),
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }]
  ]
};
