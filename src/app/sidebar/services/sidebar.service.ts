import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {

  public isSideBarShown = new BehaviorSubject(false);

  constructor() { }

  public showSideBar(): void {
    this.isSideBarShown.next(true);
  }

  public hideSideBar(): void {
    this.isSideBarShown.next(false);
  }
}
