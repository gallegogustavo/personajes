import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecharacterComponent } from './onecharacter.component';

describe('OnecharacterComponent', () => {
  let component: OnecharacterComponent;
  let fixture: ComponentFixture<OnecharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnecharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnecharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
