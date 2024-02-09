import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
})
export default class ChangeDetectionComponent {
  public frameworkAsSignal = signal({
    name: 'Angular',
    release: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    release: 2016,
  };

  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  );

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update((value) => ({ ...value, name: 'React' }));
    }, 3000);
  }
}
