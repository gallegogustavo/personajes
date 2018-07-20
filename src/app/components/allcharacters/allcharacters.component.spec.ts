import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcharactersComponent } from './allcharacters.component';

describe('AllcharactersComponent', () => {
  let component: AllcharactersComponent;
  let fixture: ComponentFixture<AllcharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
