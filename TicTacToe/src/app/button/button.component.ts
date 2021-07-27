import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template:  `
  <button type="button" *ngIf="!value">{{value}}</button>
  <button type="button" *ngIf="value == 'X'">{{ value }}</button>
  <button type="button" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{

  @Input() value : 'X'|'O';
  constructor() { }
}

