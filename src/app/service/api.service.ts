import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private Http: HttpClient) { }
  postDataToServer(data: any, url: String) {
    return this.Http.post<any>("http://localhost:3000/" + url + "", data);
  }

  getProduct(url:String) {
    return this.Http.get<any>("http://localhost:3000/" + url);
  }

  deleteProduct(url:String,id:number) {
    return this.Http.delete<any>("http://localhost:3000/" + url+"/"+id);
  }

  getBrands(url:String){
    return this.Http.get<any>("http://localhost:3000/" + url);
  }

}