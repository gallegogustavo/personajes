import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepersonajeComponent } from './singlepersonaje.component';

describe('SinglepersonajeComponent', () => {
  let component: SinglepersonajeComponent;
  let fixture: ComponentFixture<SinglepersonajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglepersonajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglepersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
