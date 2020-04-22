import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MovieServiceService} from '../movie-service.service';

@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.css']
})
export class SerialsComponent implements OnInit {

  constructor(private http : HttpClient, private movieService : MovieServiceService) { }
  serials;
  ngOnInit(): void {
    this.movieService.TvSerials().subscribe((data: any)=>{
      console.log(data);
      this.serials = data.results;
    })
  }
  getDetails(){
    // document.querySelector("p").style.display="block";
     var x = document.getElementById("display");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

AddFavourite(item){
  const Id = item.id;
  this.movieService.addFavourite(Id);
}
    
  }
