import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-test]',
  template: `<h2>
                Welcome {{name}}
              </h2>
            <h2 class="text-success">Nabid Workspace</h2>
            <h2 [class]="successClass">Bangladesh</h2>
            <h2 class="text-special" [class]="successClass">Bangladesh</h2>
            <h2 [class.text-danger]="hasError">Bangladesh</h2>
            <h2 [ngClass]="messageClasses">Bangladesh Bangladesh Bangladesh</h2>
            <h2 [style.color]="highlightColor">Style Binding</h2>
            <h2 [style.color]="hasError ? 'red' : 'green'">Color Changing while Binding</h2>
            <h2 [ngStyle]="titleStyles">titleStyles</h2>
            <button (click)="onClick($event)">Greet</button>
            <button (click)="greeting='Welcome Nabid'">Greet</button>{{greeting}}
            <input #myInput type="text">
            <button (click)="logMessage(myInput.value)">Log</button>
<input [(ngModel)]="name" type="text">
{{name}}

              `,
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {


  public name = 'Nabid Alam';
  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = true;
  public greeting = '';


public highlightColor = 'orange';

  public messageClasses = {
'text-success': !this.hasError,
'text-danger': this.hasError,
'text-special': this.isSpecial
};


public titleStyles = {
  color: 'blue',
  fontStyle: 'italic'
};

  constructor() { }
  ngOnInit() {
  }

  greetUser() {
    return 'Hello ' + this.name;
  }
  onClick(event ) {
    alert(event);
    this.greeting = event.type;
  }

  logMessage(value) {
    console.log(value);
  }
}
