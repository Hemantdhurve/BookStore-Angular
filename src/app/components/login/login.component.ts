import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../Services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public router: Router, private user: UserService, private _snackbar: MatSnackBar) { }
  navigate() {
    this.router.navigate(['/register']);
  }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],

    })
  }

  get f() { return this.loginForm.controls; }

    onSubmit() {
      this.submitted = true;

    if (this.loginForm.valid) {
      let payload = {
        emailId: this.loginForm.value.emailId,
        password: this.loginForm.value.password
      }
      //.subscribe method is used to get the response from backend (observable) like promises
        this.user.login(payload).subscribe((response: any) => {
        console.log(response)
        //set the token here and get in authguard
        localStorage.setItem('token', response.data)
        this.router.navigate(['dashboard/getallbooks']);
        this._snackbar.open("Login Successful", "Close", { duration: 3000 })

      }, (error) => {
        console.log(error);
      })
    }
    this.loginForm.reset();
  }

  navAdmin(){
    this.router.navigate(['/adminlogin'])
  }
}

