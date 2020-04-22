import { Component, OnInit } from '@angular/core';
import {ServiceService } from '../service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
post = [];
  constructor(private service : ServiceService, private route : Router) { }

  ngOnInit(): void {
    this.service.FetchDetails().subscribe(
      (posts)=>{
        console.log(posts);
        this.post = posts;
        console.log(this.post);
      }
    );
  }
  Delete(item){
    const id = item.id;
    console.log(id);
    this.service.DeleteDetails(id).subscribe(()=>{
      console.log("Deleted");
    }
    );
    this.route.navigate(['/display']);
    this.service.FetchDetails().subscribe(
      (posts)=>{
        this.post = posts;
        console.log(this.post);
      }
    );
  }

}
