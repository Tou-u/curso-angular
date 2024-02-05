import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="decreaseBy()">-1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy()">+1</button>
  `,
})
export class CounterComponent {
  public counter: number = 0;

  increaseBy(value: number = 1): void {
    this.counter += value;
  }
  decreaseBy(value: number = 1): void {
    this.counter -= value;
  }
  resetCounter(): void {
    this.counter = 0;
  }
}
