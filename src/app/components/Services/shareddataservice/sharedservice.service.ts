import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  noofCart:any;
  constructor() { }
  private subject = new Subject<any>();

sendClickEvent() {
  this.subject.next(this.noofCart)
}
getClickEvent(): Observable<any>{ 
  return this.subject.asObservable();
}
}
