import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class AddressserviceService {

  // token:any;
  // bookId=localStorage.getItem('bookId')
  // constructor( private address:AddressserviceService,private httpservice:HttpService) {
  //   this.token=localStorage.getItem('token')
  //  }

  // addAddress(data:any){
  //   console.log(data)
  //   let header={
  //     headers:new HttpHeaders({
  //       'Content-type':'application/json',
  //       'Authorization':'Bearer '+this.token
  //     })
  //   }
  //   return this.httpservice.PostService('/Address/Add',data,true,header)
  // }
}
