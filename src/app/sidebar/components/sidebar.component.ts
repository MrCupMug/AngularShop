import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../services/sidebar.service';
import { WishListService } from 'src/app/wish-list/Service/wish-list.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  public isSideBarShown!: boolean;

  constructor(
              private readonly sidebarService: SidebarService,
  ) {
    this.sidebarService.isSideBarShown.subscribe((value) => this.isSideBarShown = value);
   }

  public ngOnInit(): void { }

  public hideSideBar(): void {
    this.sidebarService.hideSideBar();
  }

}
