import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  cartArray: any=[];
  token: any;
  counter=0;
  noofCart:any;
  //last file 
  //lang support by browser, typescript and 

  constructor(private cart: CartserviceService, private httpservice: HttpService) {
    // this.token = localStorage.getItem('token');
  }

  ngOnInit(): void {
    this.getCartDetails();
  }
  // Get Cart Items
  getCartDetails() {
    this.cart.getCartDetails().subscribe((response: any) => {
      console.log("Retrived All Cart Items", response.data);
      this.cartArray = response.data;
      this.noofCart=response.data.length;
      console.log('Cart Array: ', this.cartArray);
      console.log("Total number of Cart:",this.noofCart);
    });
  }

  increment(cartId:any,bookQuantity:any) {
    // this.counter++;
    console.log('Cart ID:',cartId,'BookQuantity:', bookQuantity)
    this.cart.updateCartQty(cartId,(bookQuantity+1)).subscribe((response:any)=>{
      console.log("Quantity updated",response); 
      console.log('Cart ID:',cartId,'BookQuantity:', response.data)
      this.getCartDetails();
    
    })
  }

  decrement(cartId:any,bookQuantity:any){
    // this.counter++;
    console.log('Cart ID:',cartId,'BookQuantity:', bookQuantity)
    this.cart.updateCartQty(cartId,(bookQuantity-1)).subscribe((response:any)=>{
    console.log("Quantity updated",response); 
    console.log('Cart ID:',cartId,'BookQuantity:', response.data)
      this.getCartDetails();
    })
  }

    removeFromCart(cartId: any) {
    console.log(cartId)
    this.cart.deleteFromCart(cartId).subscribe((response: any) => {      
      console.log("Removed from cart",response);
      //i have called getcartdetails() to get all cart array
      this.getCartDetails();
    })
  }

}
