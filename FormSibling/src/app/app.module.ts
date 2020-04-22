import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InvokeService} from './invoke.service';
import { AppComponent } from './app.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { ChildListComponent } from './child-list/child-list.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildFormComponent,
    ChildListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InvokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
