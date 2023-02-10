import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { CartserviceService } from '../Services/cartService/cartservice.service';

import { MycartComponent } from './mycart.component';

describe('MycartComponent', () => {
  let component: MycartComponent;
  let fixture: ComponentFixture<MycartComponent>;
  let service:CartserviceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        FormsModule,
        
      ],
      declarations: [ MycartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(CartserviceService)

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Test case 1
  it('should check spyon service works', () => {
    spyOn(service,'getCartDetails').and.returnValue(of());
    let getcart=component.getCartDetails();
    expect(service.getCartDetails).toHaveBeenCalled();
  });
  
});
