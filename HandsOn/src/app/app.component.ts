import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HandsOn';
  arr = [{name:"sai", presence:"false"},{name:"swapnil", presence:"false"},{name:"hello", presence:"false"}];
  num : string = "Hello";


onClicked(){
alert(this.arr);
}
}
