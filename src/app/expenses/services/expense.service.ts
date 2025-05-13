import { Injectable } from '@angular/core';
import { Expense } from '../interfaces/expense';
import { BehaviorSubject, Subject } from 'rxjs';
import { FilterState } from '../interfaces/filter-state';

@Injectable({
    providedIn: 'root'
})
export class ExpenseService {

    private expensesSubject = new BehaviorSubject<Expense[]>([]);
    expenses$ = this.expensesSubject.asObservable();

    private initialFilter = {
        label: '',
        category: '',
        start_date: new Date('01/01/1990'),
        end_date: new Date('01/01/2999')
    }

    private filterSubject = new BehaviorSubject<FilterState>(this.initialFilter);

    filter$ = this.filterSubject.asObservable();

    setFilter(partial: Partial<FilterState>) {
        const current = this.filterSubject.getValue();
        this.filterSubject.next({ ...current, ...partial });
    }

    resetFilter(){
        this.filterSubject.next(this.initialFilter)
    }

    getFilteredItems(items: Expense[], filter: FilterState) {
        console.log('getFilteredItems');
        return items.filter(item =>
            item.label.toLowerCase().includes(filter.label.toLowerCase()) &&
            item.category.toLowerCase().includes(filter.category.toLowerCase()) &&
            new Date(item.date) >= filter.start_date &&
            new Date(item.date) <= filter.end_date
        );
    }

    async getAllExpenses(): Promise<Expense[]> {
        const data = await (fetch(this.dataurl));
        return (await data.json()) ?? [];
    }

    async getExpenseById(id: string): Promise<Expense | undefined> {
        const data = await fetch(`${this.dataurl}/${id}`);
        return (await data.json()) ?? {};
    }

    constructor() {
        console.log("ExpenseService constructor")
        this.getAllExpenses().then(expenses =>
            this.expensesSubject.next(expenses)
        )
    }

    readonly dataurl = 'http://localhost:3000/expenses';

}
