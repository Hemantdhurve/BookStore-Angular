import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogbookboxComponent } from './dialogbookbox.component';

describe('DialogbookboxComponent', () => {
  let component: DialogbookboxComponent;
  let fixture: ComponentFixture<DialogbookboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogbookboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogbookboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
