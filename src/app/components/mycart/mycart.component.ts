import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddressserviceService } from '../Services/addressservice/addressservice.service';
import { CartserviceService } from '../Services/cartService/cartservice.service';
import { HttpService } from '../Services/httpService/http.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  bookId = localStorage.getItem('BookId');
  // carts:any;
  cartArray: any = [];
  token: any;
  counter = 0;
  noofCart: any;

  hideButton = true;
  hideShowAddress = true;
  hideContinue = true;
  hideShowOrder = true;

  addressArray: any;
  fullName: any;
  mobileNumber: any;
  address: any;
  city: any;
  state: any;
  type: any;
  userId:any;
  addressId:any;
  noofAddress:any;


  //last file 
  //lang support by browser, typescript and 

  constructor(private cart: CartserviceService, private httpservice: HttpService, private addressservice: AddressserviceService, private _snackbar: MatSnackBar,private router:Router) {
    
  }

  ngOnInit(): void {
    this.bookId = localStorage.getItem('bookId');
    this.getCartDetails();
    this.getAddresses();
    // this.userId=localStorage.getItem('UserId');
  }
  // Get Cart Items
  getCartDetails() {
    this.cart.getCartDetails().subscribe((response: any) => {
      console.log("Retrived All Cart Items", response.data);
      this.cartArray = response.data;
      this.noofCart = response.data.length;
      console.log('Cart Array: ', this.cartArray);
      console.log("Total number of Cart:", this.noofCart);

      //1. setting UserId for the address API
     
      // console.log( localStorage.setItem('UserId',response.data.userId))
      
    });
  }

  increment(cartId: any, bookQuantity: any) {
    // this.counter++;
    console.log('Cart ID:', cartId, 'BookQuantity:', bookQuantity)
    this.cart.updateCartQty(cartId, (bookQuantity + 1)).subscribe((response: any) => {
      console.log("Quantity updated", response);
      console.log('Cart ID:', cartId, 'BookQuantity:', response.data)
      this.getCartDetails();

    })
  }

  decrement(cartId: any, bookQuantity: any) {
    // this.counter++;
    console.log('Cart ID:', cartId, 'BookQuantity:', bookQuantity)
    this.cart.updateCartQty(cartId, (bookQuantity - 1)).subscribe((response: any) => {
      console.log("Quantity updated", response);
      console.log('Cart ID:', cartId, 'BookQuantity:', response.data)
      this.getCartDetails();
    })
  }

  removeFromCart(cartId: any) {
    console.log(cartId)
    this.cart.deleteFromCart(cartId).subscribe((response: any) => {
      console.log("Removed from cart", response);
      //i have called getcartdetails() to get all cart array
      this.getCartDetails();
      this._snackbar.open("Item Removed From Cart", "Close", { duration: 3000 })

    })
  }

  openAddress() {
      this.hideButton = false,
      this.hideShowAddress = false      
  }

  openContinue() {
      this.hideContinue = false,
      this.hideShowOrder = false      
  }

  orderConfirmed(){
    this.router.navigate(['/dashboard/orderplaced'])
  }

  //AddressAPI

  addAddress(){
    let data = {
      address: this.address,
      city: this.city,
      state: this.state,
      type: Number(this.type)
    }

    this.addressservice.addAddress(data).subscribe((response:any) => {
      console.log("Address Added Successfully",response)      
    })
  }

  getAddresses(){
    this.addressservice.getAddresses().subscribe((response:any)=>{
      console.log("Retrived all the Addresses",response);
      this.addressArray=response.data;
      this.noofAddress=response.data.length;
      console.log('Array of the Address: ',this.addressArray);
      console.log('Total number of Addresses :',this.noofAddress);
    })
  } 
}
