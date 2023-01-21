import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogbookboxComponent } from '../dialogbookbox/dialogbookbox.component';
import { AdminloginserviceService } from '../Services/adminloginservice/adminloginservice.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {
  noofCart: any;
  bookArray: any;
  noofBooks: any;

  bookTitle: any;
  author: any;
  rating: any;
  ratedCount: any;
  discountedPrice: any;
  actualPrice: any;
  description: any;
  bookQuantity: any;
  image: any;

  hidetable = false;
  showtable = false;

  constructor(private admin: AdminloginserviceService, public dialog: MatDialog, private router: Router) { }
  ngOnInit(): void {
    this.getallbooks();
  }

  logOut() {
    this.router.navigate(['/login'])
    //to remove the token from the local storage
    localStorage.removeItem('token')
  }

  getallbooks() {
    this.admin.getallbooks().subscribe((response: any) => {
      console.log(response)
      this.bookArray = response.response;
      this.noofBooks = response.response.length;
      console.log("Array of Book: ", this.bookArray);
      console.log("Total Books Count: ", this.noofBooks);

    })
  }

  deleteBook(bookId: any) {
    this.admin.deleteBook(bookId).subscribe((response: any) => {
      console.log('Book Deleted Successfully', response)
      this.getallbooks();
    })
  }

  openAddBlock() {
    this.hidetable = true,
      this.showtable = true
  }

  backToTable() {
    this.showtable = false,
      this.hidetable = false
  }

  addBook() {
    let data = {
      bookTitle: this.bookTitle,
      author: this.author,
      rating: Number(this.rating),
      ratedCount: Number(this.ratedCount),
      discountedPrice: Number(this.discountedPrice),
      actualPrice: Number(this.actualPrice),
      description: this.description,
      bookQuantity: Number(this.bookQuantity),
      image: this.image,
    }
    this.admin.addBook(data).subscribe((response: any) => {
      console.log("Book Added Successfully", response)
      this.getallbooks();
    })
  }

  //use in add book button
  openDialog(bookObj: any) {
    const dialogRef = this.dialog.open(DialogbookboxComponent, {
      data: bookObj
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  // updateBook(bookId:any){
  //   let data = {
  //     bookTitle: this.bookTitle,
  //     author: this.author,
  //     rating: Number(this.rating),
  //     ratedCount: Number(this.ratedCount),
  //     discountedPrice: Number(this.discountedPrice),
  //     actualPrice: Number(this.actualPrice),
  //     description: this.description,
  //     bookQuantity: Number(this.bookQuantity),
  //     image: this.image,
  //   }
  //   this.admin.updateBook(bookId,data).subscribe((response:any)=>{
  //     console.log('Book Details Updated successfully', response);
  //   })
  // }
}
