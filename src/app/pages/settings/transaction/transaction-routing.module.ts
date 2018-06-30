import { FinancialYearComponent } from './financial-year/financial-year.component';
import { TransactionComponent } from './transaction.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
    path: '',
    component: TransactionComponent,
    children: [
        {
            path: 'financial-year',
            component: FinancialYearComponent,
        }
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class TransactionRoutingModule{

}

export const routedComponents=[
    TransactionComponent,
    FinancialYearComponent
];