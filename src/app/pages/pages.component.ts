import { NbMenuItem } from '@nebular/theme';
import { MenuService } from './../@common-services/menu.service';
import { Component,OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit {

  menu : NbMenuItem[];

  constructor(private menuService : MenuService){
    
  }

  ngOnInit(){
    this.menu=this.menuService.getAsideMenuList();
  }
}
