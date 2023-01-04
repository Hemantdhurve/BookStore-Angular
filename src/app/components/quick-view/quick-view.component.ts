import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  // bookId:any;

  constructor() { }

  ngOnInit() {
    // this.getBookById(this.bookId);
  }
  // getBookById(bookId:any){
  //   this.book.getBookById(bookId).subscribe((response: any) => {
  //     console.log("Got All Books", response.response);
  //     this.book = response.response;
  //   });
  // }
}
