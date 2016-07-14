import { RouterConfig, provideRouter } from '@angular/router';

import { HelloComponent } from './hello';
import { HomeComponent } from './home';

export const routes: RouterConfig = [
    {path: '', component: HomeComponent},    
    {path: 'hello', component: HelloComponent},
];

export const appRouterProviders = [
    provideRouter(routes),
];