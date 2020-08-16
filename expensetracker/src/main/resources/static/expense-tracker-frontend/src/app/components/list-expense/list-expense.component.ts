import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import {ExpenseService} from '../../services/expense.service';
@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit {
  expenses:Expense[];

  filters={
    keyword:'',

  }

  constructor(private _expenseService: ExpenseService ,) { }

  ngOnInit(): void {
    this._expenseService.getExpenses().subscribe(data=>this.expenses=data)
  }

  listExpenses(): void {
    this._expenseService.getExpenses().subscribe(data=>this.expenses=this.filterExpenses(data))
  }

  filterExpenses(data:Expense[]){
    return data.filter((e)=>{
      return e.expense.toLowerCase().includes(this.filters.keyword.toLowerCase())
    })

}
}
