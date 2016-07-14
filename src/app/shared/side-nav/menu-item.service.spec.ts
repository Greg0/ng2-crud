/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MenuItemService } from './menu-item.service';

describe('MenuItem Service', () => {
  beforeEachProviders(() => [MenuItemService]);

  it('should ...',
      inject([MenuItemService], (service: MenuItemService) => {
    expect(service).toBeTruthy();
  }));
});
