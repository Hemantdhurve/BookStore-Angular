import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../Services/userService/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit{
  resetForm!: FormGroup;
  submitted = false;
  token:any;

  constructor(private user:UserService,private formbuilder:FormBuilder,private _snackbar:MatSnackBar,private router:Router){}

  ngOnInit(): void {
    this.resetForm=this.formbuilder.group({
      newPassword:['',[Validators.required, Validators.minLength(8)]],
      confirmPassword:['',[Validators.required, Validators.minLength(8)]],
    })
    this.token=localStorage.getItem('token');
  }
  get f() { return this.resetForm.controls; }

  onSubmit(){
    this.submitted=true;

    if(this.resetForm.valid){
      let payload={
        newPassword:this.resetForm.value.newPassword,
        confirmPassword:this.resetForm.value.confirmPassword,
      }

      this.user.resetPassword(payload,this.token).subscribe((response:any)=>{
        console.log('Password reset Successfully',response)
        this.router.navigate(['/login'])
        this._snackbar.open("Reset Successful", "Close", { duration: 3000 })
      })
    }
  }

}
