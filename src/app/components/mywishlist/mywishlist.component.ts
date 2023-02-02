import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WishlistserviceService } from '../Services/wishlistService/wishlistservice.service';

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.scss']
})
export class MywishlistComponent implements OnInit {

wishArray:any=[];
noofWishlist:Number=0;
wishlistId:Number=0;

  constructor(private wish:WishlistserviceService,private _snackbar:MatSnackBar){}

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

  deleteWishlist(wishlistId:any){
    this.wish.deleteFromWishlist(wishlistId).subscribe((response)=>{
      console.log(response);
      console.log("Removed wishlist Id:",wishlistId)
      this.getAllWishlist();
      this._snackbar.open("Item Removed Successfully", "Close", { duration: 3000 })
    })
  }
}
