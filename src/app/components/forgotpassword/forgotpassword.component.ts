import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../Services/userService/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit{
 
  forgetForm!:FormGroup
  submitted=false

  constructor(private formbuilder:FormBuilder,private router:Router,private user:UserService,private _snackbar: MatSnackBar){}

  ngOnInit(): void {
    this.forgetForm=this.formbuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
    })
  }
  get f() { return this.forgetForm.controls; }

  onSubmit(){
    this.submitted=true;
    
    if(this.forgetForm.valid){
      let payload={
        emailId:this.forgetForm.value.emailId
      }
      this.user.forgetPassword(payload).subscribe((response:any)=>{
        console.log("Token sent to Email Successfully",response)
        this._snackbar.open("Forget Successful","close",{duration:3000})
        localStorage.setItem("token",response.data)
        this.router.navigate(['/reset'])
      })
    }
  }

}
