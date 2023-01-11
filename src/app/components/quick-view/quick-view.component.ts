import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookServiceService } from '../Services/bookService/book-service.service';
import { CartserviceService } from '../Services/cartService/cartservice.service';
import { FeedbackServiceService } from '../Services/feedbackService/feedback-service.service';
import { WishlistserviceService } from '../Services/wishlistService/wishlistservice.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {

  bookId = localStorage.getItem('BookId');
  book: any;
  feedbackArray: any;
  cartlist: any;
  comment:any;

  constructor(private bookservice: BookServiceService, private feedback: FeedbackServiceService, private router: Router, private cart: CartserviceService,private wishlist:WishlistserviceService,private _snackbar:MatSnackBar) { }

  ngOnInit() {
    this.getbookById(this.bookId)
    this.getAllFeedbacks(this.bookId)
  }

  getbookById(bookId: any) {
    console.log(this.bookId)
    this.bookservice.getbookById(bookId).subscribe((response: any) => {
      console.log(response);
      //data present in response.response
      this.book = response.response;
      console.log(this.book)
    });
  }

  getAllFeedbacks(bookId: any) {
    this.feedback.getAllFeedbacks(bookId).subscribe((response: any) => {
      console.log(response);
      this.feedbackArray = response.data;
      console.log(this.feedbackArray)
    });
  }

  addFeedback(){
    let data={
      comment:this.comment,
      bookId:this.book.bookId
    }
    this.feedback.addFeedback(data).subscribe((response:any)=>{
      console.log(response);
      this.getAllFeedbacks(this.bookId);
      this._snackbar.open("Feedback Added Successful", "Close", { duration: 3000 })

    })
  }

  //1.Add to cart API 
  addToCart() {
    // this.router.navigate(["/dashboard/mycart/" + this.bookId])
    console.log(this.book)
    let data = {
      bookId: this.book.bookId,
      bookInCart: 1
    }
    this.cart.addToCart(data).subscribe((response: any) => {
      console.log(response);
      this.cartlist = response.data;
      console.log(this.cartlist);
      //smackbar is like a pop that displayed at the bottom of the screen
      //which takes 2 parameters message: string and action: string and to dismiss after some time use duration(optional)
      this._snackbar.open("Book Added to the Cart","Add",{duration:3000})
    });

  }

  addToWishlist(){
    // this.router.navigate(["/dashboard/mywishlist"])
    let data = {
      bookId: this.book.bookId,
    }
    this.wishlist.addToWishlist(data,this.bookId).subscribe((response: any) => {
      console.log("Added to wishlist", response);
      console.log('Added bookId to Wishlist :',this.bookId)
      this._snackbar.open("Book Added to the Wishlist","Add",{duration:3000})
    });
  }
}
