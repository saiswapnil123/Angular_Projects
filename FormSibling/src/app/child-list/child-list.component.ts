import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { InvokeService } from '../invoke.service';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {
  constructor(public _invokeService : InvokeService) {  }
  
  ngOnInit(){
    this._invokeService.invokeHandler$.subscribe(
      (message)=>{     
      });
  }
  @Output() onMinus = new EventEmitter();
  Minus(value)
  {
    console.log()
    this.onMinus.emit(value);
  }


}
