import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private router: Router) { }

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
}
