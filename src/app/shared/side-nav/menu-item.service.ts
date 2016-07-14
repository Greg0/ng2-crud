import { Injectable } from '@angular/core';

import { MenuItem } from './menu-item';

@Injectable()
export class MenuItemService {

  getMenuItems(): MenuItem[] {
    return [{title: 'Home', route: ''}, {title: 'Books', route: 'home'}];
  }
}
