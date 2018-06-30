import { MenuMasterComponent } from './menu-master/menu-master.component';
import { MasterComponent } from './master.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleMasterComponent } from './module-master/module-master.component';


const routes: Routes = [{
  path: '',
  component: MasterComponent,
  children: [
    {
      path: 'module-master',
      component: ModuleMasterComponent,
    },
    {
      path: 'menu-master',
      component: MenuMasterComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule { }

export const routedComponents = [
  MasterComponent,
  ModuleMasterComponent,
  MenuMasterComponent
];
