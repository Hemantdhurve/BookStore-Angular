import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { IaddAddress } from '../typeInterface';

@Injectable({
  providedIn: 'root'
})
export class AddressserviceService {

  token: any;

  constructor( private httpservice: HttpService) {
    this.token = localStorage.getItem('token')
  }

  // addAddress(data: any) {
  //   console.log(data)
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization': 'Bearer ' + this.token
  //     })
  //   }
  //   return this.httpservice.PostService('/Address/Add', data, true, header)
  // }

  //1.
  getAddresses(){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.GetService('/Address/Retrive',true,header)
  }

  //This API is only to get the fullname and mobile number of the user then call in cart.ts
  getCustomerDetails(){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+ this.token
      })
    }
    return this.httpservice.GetService('/CustomerDetails/Retrive',true,header)
  }

  //With Types Interface

  addAddress(data: IaddAddress) {
    console.log(data)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PostService('/Address/Add', data, true, header)
  }
}
