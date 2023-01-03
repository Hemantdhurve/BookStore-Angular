import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallbooksComponent } from './getallbooks.component';

describe('GetallbooksComponent', () => {
  let component: GetallbooksComponent;
  let fixture: ComponentFixture<GetallbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
