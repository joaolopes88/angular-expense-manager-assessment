import { Component } from '@angular/core';
import { HeaderComponent } from '../../expenses/components/header/header.component';
import { ExpenseListComponent } from '../../expenses/components/expense-list/expense-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, ExpenseListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
