import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../User';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
user = new User;
  constructor(private service : ServiceService, private _route :ActivatedRoute) { }
  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    const password = this.form.value.password;
    console.log(id,password);
  }
  form = new FormGroup({
    password : new FormControl()
  });
  Update(){
    const id = this._route.snapshot.paramMap.get('id');
    this.user.password = this.form.value.password;
    this.service.UpdateDetails(id,this.user).subscribe();
  }
}
