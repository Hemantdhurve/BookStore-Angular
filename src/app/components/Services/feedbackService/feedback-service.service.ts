import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  token:any;

  constructor(private httpservice:HttpService) { 
    this.token=localStorage.getItem('token')
  }

  getAllFeedbacks(bookId:any){
    let headeroptions={
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
  }
    return this.httpservice.GetService('/Feedback/Retrive?bookId='+bookId,true,headeroptions)
  }
}
