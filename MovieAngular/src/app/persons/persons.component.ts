import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { MovieServiceService} from '../movie-service.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  constructor(private http:HttpClient, private movieService : MovieServiceService, 
        private activatedRoute : ActivatedRoute, private router :Router) { }
  persons;
  ngOnInit(): void {
    const Id = this.activatedRoute.snapshot.params['id'];
    this.movieService.Persons(Id)
    .subscribe( (data: any)=>{
      console.log(data)
      this.persons = data.results;
    })
  }
  getLatest()
  {
    this.movieService.getLatest()
    .subscribe((data:any)=>{
      console.log(data);
      this.persons = data.results;
    })
    this.router.navigate(["/PopularPersons"]);
  }

}
