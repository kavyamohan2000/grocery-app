import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private http:HttpClient) { }
  getSub(){
    return this.http.get('http://apolis-grocery.herokuapp.com/api/subcategory')
   
  }
}
