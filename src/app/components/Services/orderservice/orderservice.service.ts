import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  token:any;
  constructor(private httpservice:HttpService) { 
    this.token=localStorage.getItem('token')
  }

  getAllorders(){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.GetService('/Order/Retrive',true,header)
  }
}
