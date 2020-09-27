import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map, filter, scan } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  authToken: any;
  constructor(private http: HttpClient) { }
  addCategory(data){
    let headers = new HttpHeaders();
    headers.append('content-Type', 'application/json');
    return this.http.post(environment.url + 'category/addCategory', data, { headers: headers });
  }
  getAllCategory(){
    return this.http.get(environment.url + 'category/getAllCategory');
  }
  removeCategory(id){
    let headers = new HttpHeaders();
    headers.append('content-Type', 'application/json');
    return this.http.delete(environment.url + 'category/removeCategory/'+ id);
  }
  getCategoryById(id){
    return this.http.get(environment.url + 'category/getCategoryById/' + id);
  }
}
