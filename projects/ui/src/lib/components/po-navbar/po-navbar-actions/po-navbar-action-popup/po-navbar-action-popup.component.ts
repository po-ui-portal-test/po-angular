import { Component, Input } from '@angular/core';

import { PoNavbarIconAction } from '../../interfaces/po-navbar-icon-action.interface';

@Component({
  selector: 'po-navbar-action-popup',
  templateUrl: './po-navbar-action-popup.component.html',
  standalone: false
})
export class PoNavbarActionPopupComponent {
  @Input('p-icon-actions') iconActions: Array<PoNavbarIconAction>;

  getLastIconAction() {
    // Returns the last icon action from the list of icons that contains a string, not a template reference.
    return this.iconActions?.find(iconAction => typeof iconAction.icon === 'string')?.icon;
  }
}
