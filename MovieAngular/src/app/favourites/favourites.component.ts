import { Component, OnInit } from '@angular/core';
import { MovieServiceService} from '../movie-service.service';
import { HttpClient } from '@angular/common/http';

interface Details{
  name : string,
  backdrop_path: string
};
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
 title:any = [];
 details : Details = [] as any;
  constructor(public movieService : MovieServiceService, private http:HttpClient) { }
  Favourites:any=this.movieService.favourites;
  readonly api ="8cd20f8cc444270e5d9f62b12084f34b";
  ngOnInit(): void {    
    for(var i in this.Favourites){
      this.http.get<Details>("https://api.themoviedb.org/3/tv/"+this.Favourites[i]+"?api_key="+this.api)
      .subscribe((data)=>{
        console.log(data);
        this.details.name = data.name;
        this.details.backdrop_path = data.backdrop_path;
        console.log(this.details);
        this.title.push(this.details);
        console.log(this.title);
      });
    }
  }
    Remove(Id){
      console.log(this.title[Id].name);
      this.title.splice(Id,1);
      this.Favourites.splice(Id,1);
    }
}
