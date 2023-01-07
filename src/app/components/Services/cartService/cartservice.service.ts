import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  token:any;
  constructor(private httpservice:HttpService) { 
    this.token = localStorage.getItem('token');
  }

  //2.calling API here 
  addToCart(reqdata:any){
    let header={
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.PostService('/Cart/AddCart',reqdata,true,header)
  }
}
