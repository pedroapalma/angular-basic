import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `

        <h1>{{title}}</h1>

        <h3>La base es: <strong> {{ base }} </strong></h3>

        <button (click)="accum(base)">+ {{ base }}</button>

        <span> {{ count }} </span>

        <button (click)="accum(-base)">- {{ base }}</button>

        `
})
export class CounterComponent {
    title: string  = 'Counter App';
    count: number = 10;
    base: number = 5;
  
    accum(val: number) {
      this.count += val;
    }
}