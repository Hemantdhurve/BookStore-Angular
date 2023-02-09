import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ForgotpasswordComponent } from './forgotpassword.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ForgotpasswordComponent', () => {
  let component: ForgotpasswordComponent;
  let fixture: ComponentFixture<ForgotpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [ ForgotpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   //Test case 1
   it('should show Forgot Your Password in a span tag',(()=>{
    const fixture=TestBed.createComponent(ForgotpasswordComponent);
    fixture.detectChanges();
    const app=fixture.debugElement.nativeElement;
    expect(app.querySelector('span').textContent).toEqual('Forgot Your Password?');
  }))

   //Test case 2
   it('should show button Reset',(()=>{
    const fixture=TestBed.createComponent(ForgotpasswordComponent);
    fixture.detectChanges();
    const app=fixture.debugElement.nativeElement;
    expect(app.querySelector('.reset button').textContent).toContain('Reset Password');
  }));

   //Test case 3
   it('should show Email Id in a label tag',(()=>{
    const fixture=TestBed.createComponent(ForgotpasswordComponent);
    fixture.detectChanges();
    const app=fixture.debugElement.nativeElement;
    expect(app.querySelector('label').textContent).toContain('Email Id');
  }));

  //Test case 4
  it('should component after submit', ()=>{
    expect(component.onSubmit).toBeTruthy();
  })
});
