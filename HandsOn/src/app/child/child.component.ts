import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public item:any;
  @Output() onClicks = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick1(){
       this.onClicks.emit();
      }
  

}
