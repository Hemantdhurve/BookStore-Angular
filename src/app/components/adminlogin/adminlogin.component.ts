import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminloginserviceService } from '../Services/adminloginservice/adminloginservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

 adminloginForm!: FormGroup;
 submitted = false;
 constructor(private router:Router,private formBuilder: FormBuilder,private adminloginservice:AdminloginserviceService,private _snackbar: MatSnackBar){}

  ngOnInit(): void {
    this.adminloginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
        
    })
  }
  get f() { return this.adminloginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.adminloginForm.valid) {
      let payload = {
        emailId: this.adminloginForm.value.emailId,
        password: this.adminloginForm.value.password
      }
      //.subscribe method is used to get the response from backend (observable) like promises
        this.adminloginservice.adminlogin(payload).subscribe((response: any) => {
        console.log(response)
        //set the token here and get in authguard
        localStorage.setItem('token', response.data)
        this.router.navigate(['admindashboard/getallbooks']);
        this._snackbar.open("AdminLogin Successful", "Close", { duration: 3000 })
      })
    }
  }
  navLogin(){
    this.router.navigate(['/login'])
  }

  navRegistration(){
    this.router.navigate(['/register'])
  }

}
