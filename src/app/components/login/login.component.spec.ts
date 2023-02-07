import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[        
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should create', () => {
  //   expect(component.loginForm.invalid).toHaveBeenCalled();
  // });

  //Test case 1

  it('component initial state', () => {
    expect(component.submitted).toBeFalsy();
    expect(component.loginForm).toBeDefined();
  });

  //Test case 2
  it('component after submit', ()=>{
    expect(component.onSubmit).toBeTruthy();
  })

  //Test case 3
  it('should show ONLINE BOOK SHOPPING in a p tag',(()=>{
    const fixture=TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const app=fixture.debugElement.nativeElement;
    expect(app.querySelector('p').textContent).toEqual('ONLINE BOOK SHOPPING');
  }));

  //Test case 4 
  it('should component before filling form', ()=>{
    expect(component.loginForm.invalid).toBeTruthy();
  })
  
});
