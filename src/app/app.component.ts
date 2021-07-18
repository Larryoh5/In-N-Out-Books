/**
 * * Title: app.component.ts
 * Author: Larry Ohaka
 * Date: 7/17/21
 * Description: Navigation and Layout
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'in-n-out-booksp3';
  //assignment variable thats a string variable
  assignment: string;

  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books';
  }

}
