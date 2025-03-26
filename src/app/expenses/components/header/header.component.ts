import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

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
  categoryList = [
    { value: 'category1', display: 'Category 1' },
    { value: 'category2', display: 'Category 2' },
    { value: 'category3', display: 'Category 3' }
  ];

  public onChange(){
    console.log('hello');
  }

  public dateUpdate (){
    console.log('date updated');
  }

  public dateInput(){
    console.log('date input');
  }

  public categoryUpdate(event:any){
    console.log(event.value);
  }
}
