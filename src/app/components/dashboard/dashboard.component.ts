import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from '../Services/cartService/cartservice.service';
import { DataserviceService } from '../Services/dataService/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  search: any;

  cartCount:any;
  cartArray:any=[];
  noofCart:any;


  constructor(private router: Router, private dataservice: DataserviceService,private cart:CartserviceService) {
    //step 3 subscribe datasrvice for the count  (step 4 in mycart.ts )
    this.dataservice.cartCount.subscribe((response:any)=>{
      this.cartCount=response;
    })
   }
  ngOnInit(): void {
   this.getCartDetails();
  }

   getCartDetails() {
    this.cart.getCartDetails().subscribe((response: any) => {
      console.log("Retrived All Cart Items", response.data);
      this.cartArray = response.data;
      this.noofCart = response.data.length;
      console.log('Cart Array: ', this.cartArray);
      console.log("Total number of Cart:", this.noofCart);

      // step 5 calling dataservice to get the count in the badge (step 4 in dash.ts)
      this.dataservice.cartCount.next(this.cartArray)
    });
  }

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
 
}
