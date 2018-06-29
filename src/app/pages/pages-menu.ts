import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
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
        title: 'Organization Detail',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Branch Office Details',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Masters',
        children: [
          {
            title: 'Authorization Info',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Module Master',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Menu Master',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'User Info',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'User Level Master',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Code Master',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Series Master',
            link: '/pages/tables/smart-table',
          },
        ],
      },
      {
        title: 'Transactions',
        children: [
          {
            title: 'Dynamic Report',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Dynamic DB Master',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'User Rights',
            children: [
              {
                title: 'Dashboard Menu Rights',
                link: '/pages/tables/smart-table',
              },
              {
                title: 'User Financial Year Rights',
                link: '/pages/tables/smart-table',
              },
              {
                title: 'User Branch Module Rights',
                link: '/pages/tables/smart-table',
              },
              {
                title: 'User Menu Rights',
                link: '/pages/tables/smart-table',
              },
            ],
          },
          {
            title: 'User Subject Rights',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Address Code Master',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Area Village Master',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Financial Year Master',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Series Transaction',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Parameter Master',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'User Master Reports',
            link: '/pages/tables/smart-table',
          },
        ],
      },
      {
        title: 'DSC Registration',
        link: '/pages/tables/smart-table',
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
