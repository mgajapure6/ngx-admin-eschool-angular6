import { SettingsComponent } from './settings.component';
import { ThemeModule } from './../../@theme/theme.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule} from 'angular-datatables';
import { SettingsRoutingModule } from './settings-routing.module';
import { ModuleMasterComponent } from './master/module-master/module-master.component';

const SETTINGS_COMPONENTS = [
  SettingsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ThemeModule
  ],
  declarations: [
    ...SETTINGS_COMPONENTS,
  ]
})
export class SettingsModule { }

