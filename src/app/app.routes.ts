import { RouterConfig, provideRouter } from '@angular/router';

import { bookRoutes } from './book';

import { DashboardComponent } from './dashboard';

export const routes: RouterConfig = [
    {path: '', redirectTo: 'dashboard'},
    {path: 'dashboard', component: DashboardComponent},
    ...bookRoutes
];

export const appRouterProviders = [
    provideRouter(routes),
];