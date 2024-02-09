import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-loader-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full', cssClass]">
      <ng-content />
    </section>
  `,
})
export class HeavyLoaderFastComponent {
  @Input({ required: true })
  public cssClass!: string;

  constructor() {
    console.log('heavy loader fast creado');
  }
}
