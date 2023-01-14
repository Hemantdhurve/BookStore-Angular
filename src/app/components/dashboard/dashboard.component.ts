import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../Services/dataService/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  badgeValue=0;
  search: any;


  constructor(private router: Router, private dataservice: DataserviceService) { }

  navToMycart() {
    this.router.navigate(["/dashboard/mycart"])
  }

  logOut() {
    this.router.navigate(['/login'])
    //to remove the token from the local storage
    localStorage.removeItem('token')
  }
  navWishlistPage() {
    this.router.navigate(['/dashboard/mywishlist'])
  }
  navOrderPage() {
    this.router.navigate(['/dashboard/myorder'])
  }
  navGetallBooksPage(){
    this.router.navigate(['/dashboard/getallbooks'])
  }

  //step 3.
  searchBook(event: any) {
    let searchResult = {
      type: 'search',
      dataResult: [event.target.value]
    }
    return this.dataservice.changeMessage(searchResult)
  }

  cartLength(badgeValue:any){
    let cartvalue={
      type:'number',
      dataResult:[badgeValue]
    }
    return this.dataservice.changeMessage(cartvalue);
  }

 
 
}
