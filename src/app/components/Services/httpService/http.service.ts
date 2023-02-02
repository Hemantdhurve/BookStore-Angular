import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IaddAddress, IaddBook, IaddFeedback, IaddOrder, IaddToCart, IaddToWishlist, IforgetPassword, Ilogin, Iregister, IresetPassword, IupdateCartQty } from '../typeInterface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl="https://localhost:44385/api"

  constructor( private httpclient: HttpClient) { }
  //http methods takes 4 parameters 
  //1) url is in string format
  //2) requestdata : any is the data that the user wants
  //3) token => false initially because we not use at start then we have to made true
  //4) httpOptions =>the content of which type i.e in application/json format which requied token or not

  //Without using type Interface 

  // PostService(url: string, reqdata: any,token:boolean=false,httpOptions:any){
  //   return this.httpclient.post(this.baseurl+url,reqdata,token && httpOptions)
  // }

  
  GetService(url: string,token:boolean=false,httpOptions:any){
    return this.httpclient.get(this.baseurl+url,token && httpOptions)
  }
  DeleteService(url: string, token: boolean, httpHeadersOptions: any) {
    return this.httpclient.delete(this.baseurl+url,token && httpHeadersOptions)  
  }
  PutService(url: string, reqdata: any,token:boolean=false,httpOptions:any){
     return this.httpclient.put(this.baseurl+url,reqdata,token && httpOptions)
  }




  //With using Type Interface 


  PostService(url: string, reqdata: Ilogin | Iregister | IforgetPassword | IaddToCart | IaddToWishlist | IaddAddress | IaddFeedback | IaddBook | IaddOrder,token:boolean=false,httpOptions:any){
    return this.httpclient.post(this.baseurl+url,reqdata,token && httpOptions)
  }

  //Used only for the reset Password
  PutServices(url: string, reqdata: IresetPassword,token:boolean=false,httpOptions:any){
    return this.httpclient.put(this.baseurl+url,reqdata,token && httpOptions)
 }
}
