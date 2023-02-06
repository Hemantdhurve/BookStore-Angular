import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MywishlistComponent } from './mywishlist.component';

describe('MywishlistComponent', () => {
  let component: MywishlistComponent;
  let fixture: ComponentFixture<MywishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        MatSnackBarModule,
      ],
      declarations: [ MywishlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MywishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
