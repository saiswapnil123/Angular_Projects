import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {InvokeService} from '../invoke.service';
import { Details } from '../Details';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit {

  constructor(private _invokeService : InvokeService) { }
  ngOnInit(): void {
  }
  @Output() onAdd = new EventEmitter();
  
  signupfrm = new FormGroup({
    lastName : new FormControl(),
    firstName : new FormControl()
  });
  onSubmit(){
    const firstName = this.signupfrm.value.firstName;
    const lastName = this.signupfrm.value.lastName;
    const name = firstName +" "+lastName;
    console.log(firstName);
    this._invokeService.setList(name);
    this.onAdd.emit();
  }
}
