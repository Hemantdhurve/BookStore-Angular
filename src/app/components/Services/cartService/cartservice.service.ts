import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { IaddToCart, IdeleteFromCart, IupdateCartQty } from '../typeInterface';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  token: any;
  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem('token');
  }

  //2.calling API here 
  // addToCart(reqdata: any) {
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization': 'Bearer ' + this.token
  //     })
  //   }
  //   return this.httpservice.PostService('/Cart/AddCart', reqdata, true, header)
  // }

  //1.Get Cart Details
  getCartDetails() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.GetService('/Cart/RetriveCart', true, header);
  }

  updateCartQty(cartId: Number, bookQuantity: Number) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PutService('/Cart/UpdateQTY?cartId=' + cartId + '&bookQuantity=' + bookQuantity, cartId, true, header)
  }

  //with Type interface
  // updateCartQty(data:IupdateCartQty) {
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization': 'Bearer ' + this.token
  //     })
  //   }
  //   return this.httpservice.PutService('/Cart/UpdateQTY?cartId=' + data.cartId + '&bookQuantity=' + data.bookQuantity, data, true, header)
  // }


  // deleteFromCart(cartId: any) {
  //   console.log(cartId)
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization': 'Bearer ' + this.token
  //     })
  //   }
  //   return this.httpservice.DeleteService('/Cart/DeleteCart?cartId=' + cartId, true, header);
  // }

  
  //with Type interface

  addToCart(reqdata: IaddToCart) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PostService('/Cart/AddCart', reqdata, true, header)
  }


  deleteFromCart(cartIddata: IdeleteFromCart) {
    console.log(cartIddata)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.DeleteService('/Cart/DeleteCart?cartId=' + cartIddata, true, header);
  }

}
