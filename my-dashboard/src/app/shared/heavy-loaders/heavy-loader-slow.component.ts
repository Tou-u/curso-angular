import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-loader-slow',
  standalone: true,
  imports: [CommonModule],
  template: `<section [ngClass]="['w-full h-[600px]', cssClass]">
    Heavy Loader Slow
  </section>`,
})
export class HeavyLoaderSlowComponent {
  @Input({ required: true })
  public cssClass!: string;

  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
  }
}
