import { Injectable } from '@angular/core';
import { Expense } from '../interfaces/expense';

@Injectable({
providedIn: 'root'
})
export class ExpenseService {

async getAllExpenses(): Promise<Expense[]> {
    const data = await(fetch(this.dataurl));
    return (await data.json()) ?? [];
}

async getExpenseById(id:string): Promise<Expense | undefined> {
    const data = await fetch(`${this.dataurl}/${id}`);
    return (await data.json()) ?? {};
}

constructor() { }

readonly dataurl = 'http://localhost:3000/expenses';

}
