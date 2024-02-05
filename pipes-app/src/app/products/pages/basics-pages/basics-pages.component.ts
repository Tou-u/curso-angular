import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styles: ``,
})
export class BasicsPagesComponent {
  public nameLower: string = 'rodrigo';
  public nameUpper: string = 'RODRIGO';
  public fullName: string = 'RoDrigo rIqueLMe';

  public customDate: Date = new Date();
}
