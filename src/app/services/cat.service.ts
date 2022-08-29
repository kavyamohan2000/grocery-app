import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CatService {
  private base_url='http://apolis-grocery.herokuapp.com/api/';
  constructor(private http:HttpClient) { }
  getcategory():Observable<any>{
    return this.http.get(`${this.base_url}category`);
  }
  getSubcategoryByCatid(catId:any):Observable<any>{
    return this.http.get<any>(`${this.base_url}subcategory/${catId}`);
  }
  getProductByCatid(catId:any):Observable<any>{
    return this.http.get<any>(`${this.base_url}products/cat/${catId}`);
  }
  getProductById(id:any):Observable<any>
{
  return this.http.get<any>(`${this.base_url}products/${id}`);
}
getProductBySubId(subId:any):Observable<any>{
   return this.http.get<any>(`${this.base_url}products/sub/${subId}`);
}

}
