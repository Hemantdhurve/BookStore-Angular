import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../Services/dataService/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  value: any;
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

  searchBook(event: any) {
    let searchResult = {
      type: 'search',
      dataResult: [event.target.value]
    }
    return this.dataservice.changeMessage(searchResult)
  }

}
