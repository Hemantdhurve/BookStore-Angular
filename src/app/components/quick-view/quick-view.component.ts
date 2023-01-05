import { Component, Input, OnInit } from '@angular/core';
import { BookServiceService } from '../Services/bookService/book-service.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {

  bookId=localStorage.getItem('BookId');
  book:any;

  constructor(private bookservice:BookServiceService) { }

  ngOnInit() {
    this.getbookById(this.bookId)

  }

   getbookById(bookId:any){
    console.log(this.bookId)
    this.bookservice.getbookById(bookId).subscribe((response: any) => {
      console.log(response);
      //data present in response.response
      this.book=response.response;
      console.log(this.book)
    });
  }
  
}
