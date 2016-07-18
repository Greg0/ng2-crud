import { RouterConfig, provideRouter } from '@angular/router';

import { HomeComponent } from './home';
import { DashboardComponent } from './dashboard';
import { BookComponent } from './book';

export const routes: RouterConfig = [
    {path: '', redirectTo: 'dashboard'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'book', component: BookComponent},
    {path: 'book/show/:id', component: BookComponent},
    {path: 'book/edit/:id', component: BookComponent},
    {path: 'book/delete/:id', component: BookComponent},
];

export const appRouterProviders = [
    provideRouter(routes),
];