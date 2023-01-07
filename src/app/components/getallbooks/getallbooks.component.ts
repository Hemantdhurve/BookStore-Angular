import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from '../Services/bookService/book-service.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {

  bookArray: any=[];
  noofBooks:any;
  bookId:any;

  constructor(private book: BookServiceService,private router:Router) { }
  
  ngOnInit() {
    this.getallbooks();
  }

  getallbooks() {
     this.book.getallbooks().subscribe((response: any) => {
      console.log(response)
      this.bookArray = response.response;
      this.noofBooks=response.response.length;
      console.log("Array of Book: ", this.bookArray);
      console.log("Total Books Count: ", this.noofBooks);
    })
  }

  quickVeiwPage(book:any){
    console.log(book.bookId)
    localStorage.setItem('BookId',book.bookId)
    this.router.navigate(["/dashboard/quickview/"+book.bookId]) 
  }
}

