import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { ThemeModule } from './../../../@theme/theme.module';
import { TransactionRoutingModule,routedComponents } from './transaction-routing.module';

@NgModule({
    imports: [
      ThemeModule,
      DataTablesModule,
      TransactionRoutingModule
    ],
    declarations: [
      ...routedComponents
    ]
  })
export class TransactionModule{

}