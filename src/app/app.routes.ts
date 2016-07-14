import { RouterConfig, provideRouter } from '@angular/router';

import { HomeComponent } from './home';
import { HelloComponent } from './hello';

export const routes: RouterConfig = [
    {path: '', component: HelloComponent},
    {path: 'home', component: HomeComponent},
];

export const appRouterProviders = [
    provideRouter(routes),
];