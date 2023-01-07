import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../Services/cartService/cartservice.service';
import { HttpService } from '../Services/httpService/http.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  bookId=localStorage.getItem('BookId');
  book:any;
  cartArray:any;
  token:any;

  //last file 
  //lang support by browser, typescript and 

  constructor(private cart:CartserviceService,private httpservice:HttpService){
    // this.token = localStorage.getItem('token');
  }

  ngOnInit(): void {

  }

  
}
