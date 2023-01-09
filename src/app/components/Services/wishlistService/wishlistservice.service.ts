import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistserviceService {

  token:any;
  wishlistId:any;

  constructor(private httpservice:HttpService) { 
    this.token=localStorage.getItem('token')
  }

  addToWishlist(data:any,bookId:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.PostService('/Wishlist/Add?bookId='+bookId,data,true,header)
  }

  getAllWishlist(){
    let header={
      headers:new HttpHeaders ({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.GetService('/Wishlist/RetriveAll',true,header)
  }

  deleteFromWishlist(wishlistId:any){
    console.log(wishlistId)
    let header={
      headers:({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.DeleteService('/Wishlist/Delete?wishlistId='+wishlistId,true,header)
  }
}
