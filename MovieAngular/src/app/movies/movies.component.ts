import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MovieServiceService} from '../movie-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private http : HttpClient, private movieService : MovieServiceService ) { }
  movies;
  
  ngOnInit(): void {
    // after loading of the page..
    this.movieService.Movies().subscribe((data: any)=>{
      console.log(data)
      this.movies = data.results;
    })
  }
  getDetails(item:string){
    // document.querySelector("p").style.display="block";
    var x = document.getElementsByClassName("display");
    console.log(x);
    if (x[item].style.display === "none" || x[item].style.display === "") {
      x[item].style.display = "block";
    } else {
      x[item].style.display = "none";
    }
  }
}
