import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { User } from '../User';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user = new User;
  constructor(private service : ServiceService) { }
  ngOnInit(): void {
  }

  form = new FormGroup({
    email : new FormControl(),
    password : new FormControl()
  });
  Submit(){
  const email = this.form.value.email;
  const password = this.form.value.password;
  console.log(email);  
  this.user.email = email;
    this.user.password = password;
    
    this.service.InsertDetails(this.user).subscribe(
      (posts)=>{
        console.log(posts);
      }
    );
}
}
