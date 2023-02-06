import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyorderComponent } from './myorder.component';

describe('MyorderComponent', () => {
  let component: MyorderComponent;
  let fixture: ComponentFixture<MyorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
      ],
      declarations: [ MyorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
