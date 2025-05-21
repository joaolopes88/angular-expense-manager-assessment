import { Component, inject } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { CommonModule } from '@angular/common';
import { combineLatest, map } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginator, MatPaginatorModule,],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent {
  displayedColumns: string[] = ['demo-position', 'demo-label', 'demo-date', 'demo-value', 'demo-category'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  filteredItems$ = combineLatest([
    this.expenseService.expenses$,
    this.expenseService.filter$
  ]).pipe(
    map(([expenses, filter]) => this.expenseService.getFilteredItems(expenses, filter))
  );

  ngOnInit() {
    this.filteredItems$.subscribe(data => {
      this.dataSource.data = data;
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  constructor(private expenseService: ExpenseService) {
    console.log("ExpenseListComponent constructor")
  }
}
