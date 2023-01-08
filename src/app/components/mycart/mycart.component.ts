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
  userId: any;
  counter=0;

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
      console.log('Cart Array: ', this.cartArray);
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

  
}
