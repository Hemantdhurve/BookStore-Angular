import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddressserviceService } from '../Services/addressservice/addressservice.service';
import { CartserviceService } from '../Services/cartService/cartservice.service';
import { DataserviceService } from '../Services/dataService/dataservice.service';
import { HttpService } from '../Services/httpService/http.service';
import { OrderserviceService } from '../Services/orderservice/orderservice.service';

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

  addressArray: any=[];
  fullName: any;
  mobileNumber: any;
  address: any;
  city: any;
  state: any;
  addressType: any;
  userId:any;
  addressId:any;
  noofAddress:any;
  details:any;
  addval:any;
  typeId:any;
  subscription:any;
  cartId:any;
  takeCartId:any;

  //last file
  //lang support by browser, typescript and

  constructor(private cart: CartserviceService, private httpservice: HttpService, private addressservice: AddressserviceService, 
    private _snackbar: MatSnackBar,private router:Router,private orderservice:OrderserviceService,private dataservice:DataserviceService) {

  }

  ngOnInit(): void {
    this.bookId = localStorage.getItem('BookId');

    this.getCartDetails();

    // Directly initialize
    this.getCustomerDetails();
    this.getAddresses();
    this.addressId = localStorage.getItem('addressId');
    this.cartId = localStorage.getItem('cartId');

    // subscribe here 

  }
  // Get Cart Items
  getCartDetails() {
    this.cart.getCartDetails().subscribe((response: any) => {
      console.log("Retrived All Cart Items", response.data);
      this.cartArray = response.data;
      this.noofCart = response.data.length;
      console.log('Cart Array: ', this.cartArray);
      console.log("Total number of Cart:", this.noofCart);

      // step 5 calling dataservice to get the count in the badge (step 4 in dash.ts)
      this.dataservice.cartCount.next(this.noofCart)
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

      console.log(this.mobileNumber)

      //Add address API 
      let data = {
        fullName:this.fullName,
        mobilileNumber:this.mobileNumber,
        address: this.address,
        city: this.city,
        state: this.state,
        typeId: Number(this.typeId)
      }

      this.addressservice.addAddress(data).subscribe((response:any) => {
        console.log("Address Added Successfully",response) 
        this.getAddresses();     
      })

  }

  orderConfirmed(){
    // Add order API
    console.log(this.addressId)
    console.log(this.cartId)

    let data={
      addressId:this.addressId,
      bookId:Number(this.bookId),
    }
    this.orderservice.addOrder(data).subscribe((response:any)=>{
      console.log(response.data)

      this.router.navigate(['/dashboard/orderplaced'])
    })
  }


  radioOptions(event:any){
    console.log( 'console value',event.target.value)
    if(event.value ==1){      
     this.typeId=1;
    }
    else if(event.value ==2){
      this.typeId=2;
    }
    else if(event.value==3){
      this.typeId=3;    
    }
  }

  getAddresses(){
    this.addressservice.getAddresses().subscribe((response:any)=>{
      console.log("Retrived all the Addresses",response);
      this.addressArray=response.data;
      this.noofAddress=response.data.length;
      console.log('Array of the Address: ',this.addressArray);
      console.log('Total number of Addresses :',this.noofAddress);

      this.addressArray=this.addressArray.filter((response:any)=>{
        // localStorage.setItem('addressId',response.addressId)
        this.addressId=response.addressId

      })

      this.fullName=localStorage.getItem('fullName');
      console.log('fullName is: ', this.fullName);
      this.mobileNumber=localStorage.getItem('mobileNumber');
    })
  }

    getCustomerDetails(){
      this.addressservice.getCustomerDetails().subscribe((response:any)=>{
      console.log( 'Customer Details :',response);
      this.details=response.data;

      this.details=this.details.filter((response:any)=>{
        localStorage.setItem('userId',response.userId)
        localStorage.setItem('fullName',response.fullName)
        localStorage.setItem('mobileNumber',response.mobileNumber)

        this.mobileNumber=response.mobileNumber;
        this.fullName=response.fullName;
        this.userId=response.userId;
      })
    })
  }

  addNewAddress() {
    this.fullName='',
    this.mobileNumber='',
    this.address = '';
    this.city = '';
    this.state = '';
    this.typeId = '';
  }
}
