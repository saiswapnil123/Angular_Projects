import { Component } from '@angular/core';
import {InvokeService} from './invoke.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormSibling';
  count = 0;
  constructor(private _invokeService : InvokeService){}
  Minus(value)
  {
    const index = this._invokeService.dataArray.indexOf(value);
    console.log(value,index);
    this._invokeService.dataArray.splice(index,1);
    this.count -=1;

  }
  Add()
  {
    this.count+=1;
  }
}

