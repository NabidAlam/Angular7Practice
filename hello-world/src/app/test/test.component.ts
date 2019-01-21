import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-test]',
  template: `<div>
                 Inline Template
              </div>`,
  styles: [`
  div{
    color:red;
  }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
