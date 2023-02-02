import { Component, OnInit, Inject } from '@angular/core';
import { AdminloginserviceService } from '../Services/adminloginservice/adminloginservice.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialogbookbox',
  templateUrl: './dialogbookbox.component.html',
  styleUrls: ['./dialogbookbox.component.scss']
})
export class DialogbookboxComponent implements OnInit {

  bookId: any;
  bookTitle: string;
  author: string;
  rating: Number=0;
  ratedCount: Number=0;
  discountedPrice: Number=0;
  actualPrice: Number=0;
  description: string;
  bookQuantity: Number=0;
  image: string;

  dialogForm!: FormGroup;
  submitted = false;


  constructor(private admin: AdminloginserviceService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<DialogbookboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    //patch value can be written here
    console.log('getting data', data)

    this.bookId = data?.bookId
    this.bookTitle = data?.bookTitle,
    this.author = data?.author,
    this.rating = data?.rating,
    this.ratedCount = data?.ratedCount,
    this.discountedPrice = data?.discountedPrice,
    this.actualPrice = data?.actualPrice,
    this.description = data?.description,
    this.bookQuantity = data?.bookQuantity,
    this.image = data?.image

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.dialogForm = this.formBuilder.group({
      bookTitle: ['', [Validators.required]],
      author: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      ratedCount: ['', [Validators.required]],
      discountedPrice: ['', [Validators.required]],
      actualPrice: ['', [Validators.required]],
      description: ['', [Validators.required]],
      bookQuantity: ['', [Validators.required]],
      image: ['', [Validators.required]],
    })

    this.updatevalue();
  }
  get f() { return this.dialogForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.dialogForm.valid) {
      let payload = {
        bookTitle: this.dialogForm.value.bookTitle,
        author: this.dialogForm.value.author,
        rating: Number(this.dialogForm.value.rating),
        ratedCount: Number(this.dialogForm.value.ratedCount),
        discountedPrice: Number(this.dialogForm.value.discountedPrice),
        actualPrice: Number(this.dialogForm.value.actualPrice),
        description: this.dialogForm.value.description,
        bookQuantity: Number(this.dialogForm.value.bookQuantity),
        image: this.dialogForm.value.image,
      }
      //here calling two API 1)UpdateBook and 2) AddBook based on condition
      if (this.data) {
        this.admin.updateBook(this.bookId, payload).subscribe((response: any) => {
          console.log("book Updated Successfully", response)
        })
      }
      else {
        this.admin.addBook(payload).subscribe((response: any) => {
          console.log("Book Added Successfully", response)
        })
      }
    }
  }

  updatevalue(): void {
    this.dialogForm.patchValue({
      bookTitle: this.data?.bookTitle,
      author: this.data?.author,
      rating: this.data?.rating,
      ratedCount: this.data?.ratedCount,
      discountedPrice: this.data?.discountedPrice,
      actualPrice: this.data?.actualPrice,
      description: this.data?.description,
      bookQuantity: this.data?.bookQuantity,
      image: this.data?.image
    })
  }
}
