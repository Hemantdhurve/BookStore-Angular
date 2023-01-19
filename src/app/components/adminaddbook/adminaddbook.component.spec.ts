import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddbookComponent } from './adminaddbook.component';

describe('AdminaddbookComponent', () => {
  let component: AdminaddbookComponent;
  let fixture: ComponentFixture<AdminaddbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaddbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
