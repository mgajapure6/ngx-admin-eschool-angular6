import { NgModule } from '@angular/core';
import { DataTablesModule} from 'angular-datatables';
import { MasterRoutingModule,routedComponents } from './master-routing.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  imports: [
    ThemeModule,
    DataTablesModule,
    MasterRoutingModule
  ],
  declarations: [
    ...routedComponents
  ]
})
export class MasterModule { }
