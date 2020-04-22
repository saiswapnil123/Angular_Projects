import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {FormGroup, FormControl} from'@angular/forms';
import {MovieServiceService} from './movie-service.service';
import { ActivatedRoute, Router } from '@angular/router';
// import {formGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MovieAngular';
  url = "https://api.themoviedb.org/3/search/movie?api_key="
  readonly api ="8cd20f8cc444270e5d9f62b12084f34b"; 
  constructor(private http : HttpClient, private _movieService : MovieServiceService, private router: Router) {  }
  form = new FormGroup({
    search : new FormControl(),
  });
  movies;
  getMovie()
  {
    const Id = this.form.value.search;
    console.log(Id);
    
    // const furl = this.url +this.api+"?query="+search; 
    this.movies = this._movieService.searchMovies(Id);
    // this.router.navigate(["search"]);
  }
}
