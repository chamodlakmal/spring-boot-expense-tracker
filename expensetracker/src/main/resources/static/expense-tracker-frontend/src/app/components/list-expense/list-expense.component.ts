import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from '../../services/expense.service';
@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit {
  expenses: Expense[];

  filters = {
    keyword: '',
    sortBy: 'Name'

  }

  constructor(private _expenseService: ExpenseService,) { }

  ngOnInit(): void {
    this.listExpenses()
  }

  listExpenses(): void {
    this._expenseService.getExpenses().subscribe(data => this.expenses = this.filterExpenses(data))
  }

  filterExpenses(data: Expense[]) {
    return data.filter((e) => {
      return e.expense.toLowerCase().includes(this.filters.keyword.toLowerCase())
    }).sort((a, b) => {
      if (this.filters.sortBy === 'Name') {
        return a.expense.toLowerCase() < b.expense.toLowerCase() ? -1 : 1;
      } else if (this.filters.sortBy === 'Amount') {
        a.amount < b.amount ? -1 : 1;
      }
    })

  }
}
