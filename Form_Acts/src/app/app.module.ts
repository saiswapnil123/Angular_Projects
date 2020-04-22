import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import {ServiceService} from './service.service';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

const routes : Routes = [
  {path:'', component:AppComponent},
  {path:'form',component:FormComponent},
  {path:'display', component:DisplayComponent},
  {path :'update/:id', component:UpdateComponent},
  {path :'delete/:id', component:DisplayComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
