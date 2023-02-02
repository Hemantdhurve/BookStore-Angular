import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { IaddBook, IdeleteBook, Ilogin } from '../typeInterface';

@Injectable({
  providedIn: 'root'
})
export class AdminloginserviceService {

  token: any;
  bookId: any;

  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem('token')
    console.log('token is',this.token)
  }

  // adminlogin(data: any) {
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       // 'Authorization': 'Bearer ' + this.token
  //     })
  //   }
  //   return this.httpservice.PostService('/Admin/AdminLogin', data, false, header)
  // }

  getallbooks() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.GetService('/Book/RetriveAll', true, header)
  }

  // deleteBook(bookId: any) {
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization': 'Bearer ' + this.token
  //     })
  //   }
  //   return this.httpservice.DeleteService('/Book/DeleteBook?bookId=' + bookId, true, header)
  // }

  // addBook(reqdata: any) {
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization': 'Bearer ' + this.token
  //     })
  //   }
  //   return this.httpservice.PostService('/Book/AddBook', reqdata, true, header)
  // }

  // updateBook(bookId: any, reqdata: any) {
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization': 'Bearer ' + this.token
  //     })
  //   }
  //   return this.httpservice.PutService('/Book/UpdateBook?bookId=' + bookId, reqdata, true, header)
  // }


  //With using type Interface
  
  adminlogin(data: Ilogin) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // 'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PostService('/Admin/AdminLogin', data, false, header)
  }

  addBook(reqdata: IaddBook) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PostService('/Book/AddBook', reqdata, true, header)
  }

  deleteBook(bookId: IdeleteBook) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.DeleteService('/Book/DeleteBook?bookId=' + bookId, true, header)
  }

  updateBook(bookId: IdeleteBook, reqdata: IaddBook) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PutService('/Book/UpdateBook?bookId=' + bookId, reqdata, true, header)
  }
}
