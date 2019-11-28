import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromTdComponent } from './from-td.component';

describe('FromTdComponent', () => {
  let component: FromTdComponent;
  let fixture: ComponentFixture<FromTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromTdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
