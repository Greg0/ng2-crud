import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MaterializeDirective } from 'angular2-materialize';
import { SideNavComponent } from './shared'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MaterializeDirective,
    SideNavComponent
  ]
})
export class AppComponent {
  pageTitle: string = 'app works!';
}
