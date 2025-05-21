import {Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ExpenseDetailsComponent } from './expenses/components/expense-details/expense-details.component';
const routeConfig: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Expense Tracker',
  },
  {
    path: 'home',
    component: DashboardComponent,
    title: 'Expense Tracker',
  },
  {
    path: 'details/:id',
    component: ExpenseDetailsComponent,
    title: 'Expense Details',
  },
];
export default routeConfig;