import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MaterializeDirective } from 'angular2-materialize';
import { MenuItemService } from './menu-item.service';

@Component({
  moduleId: module.id,
  selector: 'app-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.css'],
  directives: [ROUTER_DIRECTIVES, MaterializeDirective],
  providers: [MenuItemService]
})
export class SideNavComponent implements OnInit {

  menuItems: any;

  constructor(private menuItemService : MenuItemService) { }

  buildMenu() {
    this.menuItems = this.menuItemService.getMenuItems();
  }

  ngOnInit() {
    this.buildMenu();
  }

}
