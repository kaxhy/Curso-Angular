import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromMdComponent } from './from-md.component';

describe('FromMdComponent', () => {
  let component: FromMdComponent;
  let fixture: ComponentFixture<FromMdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromMdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
