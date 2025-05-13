import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../interfaces/expense';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CATEGORY_LIST } from '../../../settings.contants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-details',
  standalone: true,
  imports: [MatFormField, FormsModule, CommonModule, MatInput, MatSelectModule],
  templateUrl: './expense-details.component.html',
  styleUrl: './expense-details.component.css'
})
export class ExpenseDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  expense: Expense | undefined;

  categoryList = CATEGORY_LIST;

  async onSubmit() {
  if (await this.saveForm()) {
      this.router.navigate(['/']);
    }
  }

  async saveForm(): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 50));
    return true; // or false if it failed
  }

  constructor(private expenseService:ExpenseService, private router:Router) {
    const expenseId = String(this.route.snapshot.params['id']);
    this.expenseService.getExpenseById(expenseId).then(expense => {
      this.expense = expense;
    });
  }
}
