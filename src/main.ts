// custom imports
import {AppComponent} from './app/';
import {appRouterProviders} from './app/app.routes';
import { AuthGuardService } from './app/auth/auth-guard.service';
import {AuthService} from './app/auth/auth.service';
import {environment} from './app/';
import {RegisterService} from './app/register/register.service';

// base imports
import {bootstrap} from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms} from '@angular/forms';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideForms} from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  appRouterProviders,
  AuthGuardService,
  AuthService,
  disableDeprecatedForms(),
  provideForms(),
  RegisterService,
  HTTP_PROVIDERS,
])
  .catch(err => console.error(err));
