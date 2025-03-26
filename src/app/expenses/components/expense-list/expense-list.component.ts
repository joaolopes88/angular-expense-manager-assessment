import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../interfaces/expense';
import { ExpenseComponent } from "../expense/expense/expense.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [ExpenseComponent, CommonModule],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent {
  expenseList:Expense[] = [];

  constructor (private expenseService:ExpenseService){
    this.expenseService.getAllExpenses().then((jsonExpenseList:Expense[]) => {
      this.expenseList = jsonExpenseList;
    });
  }
}
