import { Component } from '@angular/core';
import { HeavyLoaderFastComponent } from '@shared/heavy-loaders/heavy-loader-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [HeavyLoaderFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
})
export default class DeferOptionsComponent {}
