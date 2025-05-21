import { Component, Input } from '@angular/core';
import { Expense } from '../../../interfaces/expense';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {
  @Input () expense!: Expense;
  private isHighlighted:boolean;

  public onMouseOver(){
    console.log('onMouseOver');
    this.isHighlighted = true;
  }

  public onMouseLeave(){
    console.log('onMouseLeave')
    this.isHighlighted = false;
  }

  getNgClass(){
    if (this.isHighlighted)
      return 'highlighted'
    else
      return ''
  }

  constructor(){
    this.isHighlighted = false;
  }
}
