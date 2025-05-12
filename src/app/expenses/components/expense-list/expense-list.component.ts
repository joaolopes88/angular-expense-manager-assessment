import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { ExpenseComponent } from "../expense/expense/expense.component";
import { CommonModule } from '@angular/common';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [ExpenseComponent, CommonModule],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent {

  filteredItems$ = combineLatest([
    this.expenseService.expenses$,
    this.expenseService.filter$
  ]).pipe(
    map(([expenses, filter]) => this.expenseService.getFilteredItems(expenses, filter))
  );

  constructor (private expenseService:ExpenseService){
    console.log("ExpenseListComponent constructor")
  }
}
