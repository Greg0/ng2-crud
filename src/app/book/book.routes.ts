import { RouterConfig } from '@angular/router';

import { 
    BookComponent, 
    BookDetailComponent,
    BookFormComponent
} from './';

export const bookRoutes: RouterConfig = [
    {path: 'book', component: BookComponent},
    {path: 'book/show/:id', component: BookComponent},
    {path: 'book/edit/:id', component: BookFormComponent},
    {path: 'book/delete/:id', component: BookComponent},
];