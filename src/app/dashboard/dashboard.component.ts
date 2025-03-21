import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [],
  template: `
    <p>dashboard component is working</p>
  `,
  styleUrls: [],
})
export class DashboardComponent {
  constructor (){

  }
}
