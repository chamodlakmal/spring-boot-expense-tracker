import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ListExpenseComponent } from './components/list-expense/list-expense.component';

const routes: Routes = [
  {path:'',redirectTo:'/expenses',pathMatch:'full'},
  {path:'expenses',component:ListExpenseComponent},
  {path:'editexpense/:id',component:AddExpenseComponent},
  {path:'addExpense',component:AddExpenseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
