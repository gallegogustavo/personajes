/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetSuggestedPagesService } from './getSuggestedPages.service';

describe('Service: GetSuggestedPages', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSuggestedPagesService]
    });
  });

  it('should ...', inject([GetSuggestedPagesService], (service: GetSuggestedPagesService) => {
    expect(service).toBeTruthy();
  }));
});
