import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Cont Personal',  icon:'person', class: '' },
    { path: '/plan-cladire', title: 'Plan Cladire',  icon:'content_paste', class: '' },
    { path: '/angajati', title: 'Angajati',  icon:'person', class: '' },
    { path: '/departamente', title: 'Departamente',  icon:'library_books', class: '' },
    { path: '/rezervare', title: 'Rezervare camera sedinte',  icon:'location_on', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
