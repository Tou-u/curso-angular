import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  constructor() {}

  ngOnInit(): void {
    console.log('oninit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('oninit2');
  }
  ngDoCheck(): void {
    console.log('oninit3');
  }
  ngAfterContentInit(): void {
    console.log('oninit4');
  }
  ngAfterContentChecked(): void {
    console.log('oninit5');
  }
  ngAfterViewInit(): void {
    console.log('oninit6');
  }
  ngAfterViewChecked(): void {
    console.log('oninit7');
  }
  ngOnDestroy(): void {
    console.log('oninit8');
  }

  increasePrice() {
    this.currentPrice++;
  }
}
