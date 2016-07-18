import { Injectable } from '@angular/core';

import { MenuItem } from './menu-item.model';

@Injectable()
export class MenuItemService {

  getMenuItems(): MenuItem[] {
    return [{title: 'Dashboard', route: 'dashboard'}, {title: 'Books', route: 'book'}];
  }
}
