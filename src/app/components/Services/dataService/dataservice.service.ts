import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
//step 1. creating data service (step 2. parent component i.e get all books.ts)

  private messageSource=new BehaviorSubject({type:'',dataResult:[]});
  currentMessage=this.messageSource.asObservable();

  constructor() { }

  changeMessage(message:any){
    this.messageSource.next(message);
  }

  
}
