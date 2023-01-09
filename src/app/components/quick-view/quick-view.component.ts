import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private bookservice: BookServiceService, private feedback: FeedbackServiceService, private router: Router, private cart: CartserviceService,private wishlist:WishlistserviceService) { }

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

  //1.Add to cart API 
  addToCart() {
    this.router.navigate(["/dashboard/mycart/" + this.bookId])
    console.log(this.book)
    let data = {
      bookId: this.book.bookId,
      bookInCart: 1
    }
    this.cart.addToCart(data).subscribe((response: any) => {
      console.log(response);
      this.cartlist = response.data;
      console.log(this.cartlist);
    });

  }

  addToWishlist(){
    this.router.navigate(["/dashboard/mywishlist"])
    let data = {
      bookId: this.book.bookId,
    }
    this.wishlist.addToWishlist(data,this.bookId).subscribe((response: any) => {
      console.log("Added to wishlist", response);
      console.log('Added bookId to Wishlist :',this.bookId)
    });
  }
}
