import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedpagesComponent } from './relatedpages.component';

describe('RelatedpagesComponent', () => {
  let component: RelatedpagesComponent;
  let fixture: ComponentFixture<RelatedpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
