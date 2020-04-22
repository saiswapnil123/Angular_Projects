import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './User';
import {Router} from'@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient, private router : Router) { }
  InsertDetails(data: User){
    console.log("in Service",data);
    return this.http.post('http://localhost:3000/insert',data);
  }
  FetchDetails():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/select');
  }
  UpdateDetails(id,data:User){
    const password = data.password;
    console.log(id,password);
    return this.http.put('http://localhost:3000/update/'+id,data);
  }
  DeleteDetails(id){
    console.log(id);
    return this.http.delete('http://localhost:3000/delete/'+id);
    
  }
}
