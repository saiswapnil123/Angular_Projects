import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

import {Routes, RouterModule} from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SerialsComponent } from './serials/serials.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonDetailsComponent } from './persons/person-details/person-details.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SearchComponent } from './search/search.component';
import { MovieServiceService } from './movie-service.service';
import { ReactiveFormsModule } from '@angular/forms';

const route : Routes = [
{path:'', component:MoviesComponent},
{path :'TvSerials', component:SerialsComponent},
{path : 'Persons', component : PersonsComponent},
{path : 'Favourites', component:FavouritesComponent},
{path : 'searchMovies', component:SearchComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SerialsComponent,
    PersonsComponent,
    PersonDetailsComponent,
    FavouritesComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
