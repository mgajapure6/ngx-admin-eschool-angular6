import { EndPoint } from './../../Endpoints';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { NbMenuItem } from '@nebular/theme';

@Injectable()
export class MenuService{

    constructor(private httpClient:HttpClient, private ep:EndPoint){

    }

    getAsideMenuList(){
        //return this.httpClient.get(this.ep.getAsideMenuList);
        let MENU_ITEMS: NbMenuItem[] = [
            {
              title: 'Dashboard',
              icon: 'nb-home',
              link: '/pages/dashboard',
              home: true,
            },
            {
              title: 'SETTINGS',
              group: true,
            },
             //my menus
            {
              title: 'Settings',
              icon: 'nb-gear',
              children: [
                {
                  title: 'Masters',
                  children: [
                    {
                      title: 'Module Master',
                      link: '/pages/settings/master/module-master',
                    },
                    {
                      title: 'Menu Master',
                      link: '/pages/settings/master/menu-master',
                    },
                  ],
                },
                {
                  title: 'Transactions',
                  children: [
                    {
                      title: 'Financial Year',
                      link: '/pages/settings/transaction/financial-year',
                    },
                  ],
                },
              ],
            },
            {
              title: 'FEATURES',
              group: true,
            },
            {
              title: 'UI Features',
              icon: 'nb-keypad',
              link: '/pages/ui-features',
              children: [
                {
                  title: 'Buttons',
                  link: '/pages/ui-features/buttons',
                },
                {
                  title: 'Grid',
                  link: '/pages/ui-features/grid',
                },
                {
                  title: 'Icons',
                  link: '/pages/ui-features/icons',
                },
                {
                  title: 'Modals',
                  link: '/pages/ui-features/modals',
                },
                {
                  title: 'Popovers',
                  link: '/pages/ui-features/popovers',
                },
                {
                  title: 'Typography',
                  link: '/pages/ui-features/typography',
                },
                {
                  title: 'Animated Searches',
                  link: '/pages/ui-features/search-fields',
                },
                {
                  title: 'Tabs',
                  link: '/pages/ui-features/tabs',
                },
              ],
            },
            {
              title: 'Forms',
              icon: 'nb-compose',
              children: [
                {
                  title: 'Form Inputs',
                  link: '/pages/forms/inputs',
                },
                {
                  title: 'Form Layouts',
                  link: '/pages/forms/layouts',
                },
              ],
            },
            {
              title: 'Components',
              icon: 'nb-gear',
              children: [
                {
                  title: 'Tree',
                  link: '/pages/components/tree',
                }, {
                  title: 'Notifications',
                  link: '/pages/components/notifications',
                },
              ],
            },
            {
              title: 'Maps',
              icon: 'nb-location',
              children: [
                {
                  title: 'Google Maps',
                  link: '/pages/maps/gmaps',
                },
                {
                  title: 'Leaflet Maps',
                  link: '/pages/maps/leaflet',
                },
                {
                  title: 'Bubble Maps',
                  link: '/pages/maps/bubble',
                },
                {
                  title: 'Search Maps',
                  link: '/pages/maps/searchmap',
                },
              ],
            },
            {
              title: 'Charts',
              icon: 'nb-bar-chart',
              children: [
                {
                  title: 'Echarts',
                  link: '/pages/charts/echarts',
                },
                {
                  title: 'Charts.js',
                  link: '/pages/charts/chartjs',
                },
                {
                  title: 'D3',
                  link: '/pages/charts/d3',
                },
              ],
            },
            {
              title: 'Editors',
              icon: 'nb-title',
              children: [
                {
                  title: 'TinyMCE',
                  link: '/pages/editors/tinymce',
                },
                {
                  title: 'CKEditor',
                  link: '/pages/editors/ckeditor',
                },
              ],
            },
            {
              title: 'Tables',
              icon: 'nb-tables',
              children: [
                {
                  title: 'Smart Table',
                  link: '/pages/tables/smart-table',
                },
              ],
            },
            {
              title: 'Miscellaneous',
              icon: 'nb-shuffle',
              children: [
                {
                  title: '404',
                  link: '/pages/miscellaneous/404',
                },
              ],
            },
            {
              title: 'Auth',
              icon: 'nb-locked',
              children: [
                {
                  title: 'Login',
                  link: '/auth/login',
                },
                {
                  title: 'Register',
                  link: '/auth/register',
                },
                {
                  title: 'Request Password',
                  link: '/auth/request-password',
                },
                {
                  title: 'Reset Password',
                  link: '/auth/reset-password',
                },
              ],
            },
          ];
        return MENU_ITEMS;
    }
}