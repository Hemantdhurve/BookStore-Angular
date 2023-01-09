import { Component, OnInit } from '@angular/core';
import { WishlistserviceService } from '../Services/wishlistService/wishlistservice.service';

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.scss']
})
export class MywishlistComponent implements OnInit {

wishArray:any=[];
noofWishlist:any;

  constructor(private wish:WishlistserviceService){}

  ngOnInit(): void {
    this.getAllWishlist();
  }
  getAllWishlist(){
    this.wish.getAllWishlist().subscribe((response:any)=>{
      console.log('Array of Wishlist:',response)
      this.wishArray=response.data;
      this.noofWishlist=response.data.length;
      console.log("Array of Wishlist:",this.wishArray);
      console.log("Total number of wishlist:",this.noofWishlist)
      
    })
  }
}
