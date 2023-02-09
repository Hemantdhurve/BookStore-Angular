import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ResetpasswordComponent } from './resetpassword.component';

describe('ResetpasswordComponent', () => {
  let component: ResetpasswordComponent;
  let fixture: ComponentFixture<ResetpasswordComponent>;

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
      declarations: [ ResetpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Test case 1
  it('should show Reset Your Password in a p tag',(()=>{
    const fixture=TestBed.createComponent(ResetpasswordComponent);
    fixture.detectChanges();
    const app=fixture.debugElement.nativeElement;
    expect(app.querySelector('span').textContent).toEqual('Reset Your Password');
  }))

   //Test case 2
   it('should show button Reset',(()=>{
    const fixture=TestBed.createComponent(ResetpasswordComponent);
    fixture.detectChanges();
    const app=fixture.debugElement.nativeElement;
    expect(app.querySelector('.reset button').textContent).toContain('Reset Password');
  }));

   //Test case 2
   it('should show button Reset',(()=>{
    const fixture=TestBed.createComponent(ResetpasswordComponent);
    fixture.detectChanges();
    const app=fixture.debugElement.nativeElement;
    expect(app.querySelector('label').textContent).toContain('New Password');
  }));
});
