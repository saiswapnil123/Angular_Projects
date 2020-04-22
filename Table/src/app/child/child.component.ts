import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  count : number = 0;
  @Input() num: number;
  ngOnInit(): void {
  }
  

}
