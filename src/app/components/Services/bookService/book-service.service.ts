import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  token:any;

  constructor(private httpservice:HttpService) { 
    this.token=localStorage.getItem('token')
  }

  getallbooks(){
    let header={
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }

    return this.httpservice.GetService('/Book/RetriveAll',true,header)
  }

  // getBookById(bookId:any){
  //   let header={
  //     headers: new HttpHeaders({
  //       'Content-Type' : 'application/json',
  //       'Authorization':'Bearer '+this.token
  //     })
  //   }
  //   return this.httpservice.GetService('/Book/RetriveById?bookId=' +bookId,true,header)
  // }
}
