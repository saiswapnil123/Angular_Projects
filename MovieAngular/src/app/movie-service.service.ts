import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  
  constructor(private http: HttpClient) { }
  
  url = "https://api.themoviedb.org/3/";
  readonly api ="8cd20f8cc444270e5d9f62b12084f34b"; 
  favourites:any=[];
  titles;
  Movies(){
    const apiUrl = this.url+"discover/movie?api_key="+this.api+"&sort_by=popularity.desc";
    return this.http.get(apiUrl);
  }
  TvSerials() {
    // https://api.themoviedb.org/3/tv/popular?api_key=8cd20f8cc444270e5d9f62b12084f34b&language=en-US&page=1
    const apiUrl = this.url+"tv/popular?api_key="+this.api;
    return this.http.get(apiUrl);
  }
  Persons(Id:Number){
    // https://api.themoviedb.org/3/person/popular?api_key=8cd20f8cc444270e5d9f62b12084f34b&language=en-US&page=1
    const apiUrl = this.url+"person/popular?api_key="+this.api+"&language=en-US&page="+Id;
    return this.http.get(apiUrl);
  }
  getLatest()
  {
    // https://api.themoviedb.org/3/person/latest?api_key=8cd20f8cc444270e5d9f62b12084f34b
    const apiUrl = this.url+"person/latest?api_key="+this.api;
    return this.http.get(apiUrl);
  }
  searchMovies(searchStr: string) 
  {
    // const apiUrl = "https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher";
    const apiUrl = this.url+"search/movie?api_key="+this.api+"?query="+searchStr; 
    return this.http.get(apiUrl);
}
addFavourite(Id)
{
  console.log(Id);
  this.favourites.push(Id);
  console.log(this.favourites);
  // console.log(this.favourites);
}
getFavourites(Favourites)
{
  // https://api.themoviedb.org/3/tv/456?api_key=8cd20f8cc444270e5d9f62b12084f34b&language=en-US
  console.log(Favourites);
  var count:number = 0;
  for(var i in Favourites){
    console.log(Favourites[i],count);
    const apiUrl = this.url+"tv/"+Favourites[i]+"?api_key="+this.api;
    return this.http.get(apiUrl);
  }

}
}
