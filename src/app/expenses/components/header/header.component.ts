import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ExpenseService } from '../../services/expense.service';
import { CATEGORY_LIST } from '../../../settings.contants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule, MatSelectModule, CommonModule, MatInputModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor (private expenseService:ExpenseService){}

  categoryList = CATEGORY_LIST;

  public startDateUpdate (event:any){
    console.log(event.value);
    this.expenseService.setFilter({start_date:event.value});
  }

  public endDateUpdate(event:any){
    this.expenseService.setFilter({end_date:event.value});
  }

  public onCategoryChange(event:any){
    console.log(event.value);
    this.expenseService.setFilter({category:event.value});
  }

  public onLabelChange(event:any){
    console.log(event.value);
    this.expenseService.setFilter({label:event.value});
  }

  public resetFilter(){
    this.expenseService.resetFilter()
  }
}
