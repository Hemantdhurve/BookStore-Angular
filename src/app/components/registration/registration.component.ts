import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/userService/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,public router: Router,private user:UserService) { }

  navigate() {
    this.router.navigate(['login']);
}
    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        fullName: ['', Validators.required],
        emailId: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        mobileNumber: ['', Validators.required],
      })
    }
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.valid) {
          let payload = {
            fullName: this.registerForm.value.fullName,
            emailId: this.registerForm.value.emailId,
            password: this.registerForm.value.password,
            mobileNumber: Number(this.registerForm.value.mobileNumber)
          }
          console.log(payload)
          //.subscribe method is used to get the response from backend
          this.user.register(payload).subscribe((response: any) => {
            console.log(response)
            this.router.navigate(['login'])
          }, (error) => {
            console.log(error);
          })
        }
    }
}
