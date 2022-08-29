import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProService {

  constructor(private http:HttpClient) { 
  }
  getProducts(){
    return this.http.get('http://apolis-grocery.herokuapp.com/api/products')
  }
  
}
