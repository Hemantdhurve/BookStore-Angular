import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { IforgetPassword, Ilogin, Iregister, IresetPassword } from '../typeInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any;

  constructor(private httpservice:HttpService) { 
    this.token=localStorage.getItem('token')
  }

  // login(reqdata:any){
  //   let header = {
  //     headers:new HttpHeaders({
  //       'Content-type':'application/json',
  //       // 'Authorization':'token'
  //     })
  //   }
  //   // here in postService('we have to pass end points of url')
  //   return this.httpservice.PostService('/User/Login',reqdata,false,header)
  // }

  // register(reqdata:any){
  //   console.log(reqdata)
  //   let header = {
  //     headers:new HttpHeaders({
  //       'Content-type':'application/json',
  //       // 'Authorization':'token'
  //     })
  //   }
  //   return this.httpservice.PostService('/User/Register',reqdata,false,header)
  // }

  //With using Interface

  login(reqdata:Ilogin){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    // here in postService('we have to pass end points of url')
    return this.httpservice.PostService('/User/Login',reqdata,false,header)
  }

  register(reqdata:Iregister){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    return this.httpservice.PostService('/User/Register',reqdata,false,header)
  }

  forgetPassword(reqdata:IforgetPassword){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    return this.httpservice.PostService('/User/ForgetPassword?emailId='+reqdata.emailId,reqdata,false,header)
  }

  resetPassword(reqdata:IresetPassword,token:any){
    console.log(token)
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+token
      })
    }
    return this.httpservice.PutServices('/User/ResetPassword?newPassword='+reqdata.newPassword +'&confirmPassword='+reqdata.confirmPassword,reqdata,true,header)
  }
}
