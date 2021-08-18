import { Directive, ElementRef, HostListener } from '@angular/core';

import { SidebarService } from '../services/sidebar.service';

@Directive({
  selector: '[appSidebar]',
})
export class SidebarDirective {

  constructor(
              private readonly elr: ElementRef,
              private readonly sidebarService: SidebarService,
  ) {
  }
  @HostListener('click') private onClick(): void {
    this.sidebarService.showSideBar();
  }

}
