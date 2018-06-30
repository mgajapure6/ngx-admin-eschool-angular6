import { NotFoundComponent } from './../miscellaneous/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { MasterComponent } from './master/master.component';


const routes: Routes = [{
  path: '',
  component: SettingsComponent,
  children: [
    {
      path: 'master',
      loadChildren: './master/master.module#MasterModule',
    },
    {
      path: 'transaction',
      loadChildren: './transaction/transaction.module#TransactionModule',
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }

// export const routedComponents = [
//   SettingsComponent,
//   MasterComponent
// ];
