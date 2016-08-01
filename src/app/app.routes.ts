// custom imports
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { ProtectedComponent } from './protected/protected.component';
import { RegisterComponent } from './register/register.component';

// base imports
import {provideRouter, RouterConfig} from '@angular/router';

const routes: RouterConfig = [ /** array of routes */
  {
    path: '',
    redirectTo: 'home',
    terminal: true,
    pathMatch: 'full'
  },
  { component: AboutComponent, path: 'about' },
  { canActivate: [AuthGuardService], component: ChildComponent, path: 'child' },
  { component: HomeComponent, path: 'home' },
  { component: LoginComponent, path: 'login' },
  { canActivate: [AuthGuardService], component: ParentComponent, path: 'parent' },
  { canActivate: [AuthGuardService], component: ProtectedComponent, path: 'protected' },
  { component: RegisterComponent, path: 'register' }
];

export const appRouterProviders = [
  provideRouter(routes) /** this function takes in the array of routes
                            and returns the configured Router service provider.
                         */
];
