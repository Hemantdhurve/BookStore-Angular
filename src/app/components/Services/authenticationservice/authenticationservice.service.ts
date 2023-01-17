import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationserviceService {

  constructor() { }

  gettoken(){
    return !!localStorage.getItem('token');
  }
}
