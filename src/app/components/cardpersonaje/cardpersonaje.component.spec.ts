import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpersonajeComponent } from './cardpersonaje.component';

describe('CardpersonajeComponent', () => {
  let component: CardpersonajeComponent;
  let fixture: ComponentFixture<CardpersonajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardpersonajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardpersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
