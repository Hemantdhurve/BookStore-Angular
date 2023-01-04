import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../Services/bookService/book-service.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {

  bookArray: any;
  noofBooks:any;

  constructor(private book: BookServiceService) { }

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
}

