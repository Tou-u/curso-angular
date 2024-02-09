import { Component, Input, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
})
export class TitleComponent {
  @Input({ required: true })
  public title!: string;

  @Input({ transform: booleanAttribute })
  withShadow: boolean = false;
}
