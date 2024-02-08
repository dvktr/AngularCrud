import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  addEmployee(data: any):Observable<any>{
    return this.http.post("http://localhost:8000/employess", data);
  }
  getAllEmployee():Observable<any>{
    return this.http.get("http://localhost:8000/employess");
  }
  updateEmployee(id: any, data: any):Observable<any>{
    return this.http.put(`http://localhost:8000/employess/${id}`, data);
  }
  deleteEmployee(id: any):Observable<any>{
    return this.http.delete(`http://localhost:8000/employess/${id}`);
  }
}
