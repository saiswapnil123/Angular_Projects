import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';
import { Details } from './Details';

@Injectable({
  providedIn: 'root'
})
export class InvokeService {
  public _invokeService = new Subject();
  invokeHandler$ = this._invokeService.asObservable();
  dataArray: string[] = [];
  setList(message)
  {
    // const name = firstName+lastName;
    this.dataArray.push(message);
    this._invokeService.next(message);
  }
  pop()
  {
    this.dataArray.pop();
  }
}