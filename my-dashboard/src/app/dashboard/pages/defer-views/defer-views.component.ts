import { Component } from '@angular/core';
import { HeavyLoaderSlowComponent } from '@shared/heavy-loaders/heavy-loader-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [HeavyLoaderSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {}
