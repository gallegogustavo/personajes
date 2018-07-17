import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetSuggestedPagesService {

  private PrivSuggestedPages: IfaceSuggestedPages[] = [
    { name: 'Wikipedia',
      url: 'https://es.wikipedia.org/wiki/Los_Simpson',
      image: 'assets/Wikipedia.jpg'},
      { name: 'Wikiquote',
      url: 'https://es.wikiquote.org/wiki/Los_Simpson',
      image: 'assets/Wikiquote.jpg'},
      { name: 'Wikisimpsons',
      url: 'http://es.simpsons.wikia.com/wiki/Portada',
      image: 'assets/Wikisimpsons.jpg'}
  ];

constructor() { }

}

export interface IfaceSuggestedPages {
  name: string;
  url: string;
  image: string;
}
