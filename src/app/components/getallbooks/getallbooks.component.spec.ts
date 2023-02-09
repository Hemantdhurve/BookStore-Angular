import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';
import { of } from 'rxjs';
import { FilterpipePipe } from 'src/app/searchPipe/filterpipe.pipe';
import { BookServiceService } from '../Services/bookService/book-service.service';
import { IaddBook } from '../Services/typeInterface';

import { GetallbooksComponent } from './getallbooks.component';

describe('GetallbooksComponent', () => {
  let component: GetallbooksComponent;
  let fixture: ComponentFixture<GetallbooksComponent>;
  let service: BookServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        NgxPaginationModule,
        
      ],
      declarations: [GetallbooksComponent, FilterpipePipe]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GetallbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(BookServiceService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Test case 1
  it('Unit test case for the getallbooks', fakeAsync(() => {
    let spy = spyOn(service, 'getallbooks').and.returnValue(of());;
    let subSpy = spyOn(service.getallbooks(), 'subscribe');
    component.ngOnInit();
    //when using fakeAsync we have to use tick();
    tick();
    expect(spy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));

  //Test case 2
  it('Unit test case 2nd getallbooks', fakeAsync(() => {
    //creating any dummy data
    let testdata: IaddBook[] = [
      {
        bookTitle: 'book1',
        author: 'auth1',
        rating: 1,
        ratedCount: 2,
        discountedPrice: 3,
        actualPrice: 4,
        description: 'sssss',
        bookQuantity: 5,
        image: 'asaass',
      },
      {
        bookTitle: 'book2',
        author: 'auth2',
        rating: 2,
        ratedCount: 3,
        discountedPrice: 4,
        actualPrice: 5,
        description: 'sswdsssss',
        bookQuantity: 5,
        image: 'asaassf',
      },
    ];

    spyOn(service, 'getallbooks').and.returnValue(of());
    component.ngOnInit();
    // //when using fakeAsync we have to use tick();
    tick();
    expect(component.bookArray).toBeDefined();
    // expect(component.bookArray.length).toEqual(2);
  }));

  //Test case 3
  it('Unit test case 3rd', fakeAsync(() => {
    component.ngOnInit();
    expect(component.bookArray).toBeDefined();
    // expect(component.bookArray.length).toBeGreaterThan(1);
    expect(component.bookArray.length).toBeLessThan(1);
  }));

   //Test case 4
  //  it('Unit test case 4th', fakeAsync(() => {
  //   const dummycount:number=5;
  //   spyOn(service, "getallbooks").and.returnValue(Promise.resolve(dummycount));
  //   component.ngOnInit();
  //   flush();
  //   expect(component.noofBooks).toEqual(dummycount);
  //   expect(component.bookArray.length).toBeGreaterThan(1);
  // })); 

});
