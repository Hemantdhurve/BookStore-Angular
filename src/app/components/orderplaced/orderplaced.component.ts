import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderplaced',
  templateUrl: './orderplaced.component.html',
  styleUrls: ['./orderplaced.component.scss']
})
export class OrderplacedComponent  {
  constructor(private router:Router){}

  navToGetAllBooks(){
    this.router.navigate(['/dashboard/getallbooks'])
  }
}
