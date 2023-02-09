import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

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
      declarations: [ RegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   //Test case 1
   it('should show ONLINE BOOK SHOPPING in a p tag',(()=>{
    const fixture=TestBed.createComponent(RegistrationComponent);
    fixture.detectChanges();
    const app=fixture.debugElement.nativeElement;
    expect(app.querySelector('p').textContent).toEqual('ONLINE BOOK SHOPPING');
  }));

   //Test case 2
   it('should show button login',(()=>{
    const fixture=TestBed.createComponent(RegistrationComponent);
    fixture.detectChanges();
    const app=fixture.debugElement.nativeElement;
    expect(app.querySelector('.twoBtn button').textContent).toContain('LOGIN');
  }));

   //Test case 3
   it('should show button signup',(()=>{
    const fixture=TestBed.createComponent(RegistrationComponent);
    fixture.detectChanges();
    const app=fixture.debugElement.nativeElement;
    expect(app.querySelector('.loginBox button').textContent).toEqual('SignUp');
  }));

   //Test case 4 
   it('should component before filling form', ()=>{
    expect(component.registerForm.invalid).toBeTruthy();
  })

   //Test case 5
   it('component initial state', () => {
    expect(component.submitted).toBeFalsy();
    expect(component.registerForm).toBeDefined();
  });
});
