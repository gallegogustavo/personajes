/*
Antes de tocar alguna linea de codigo aca, es necesario ir y ver Firebase
para ver su documentacion y los servicios REST que nos ofrece
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DdbbPersonajes } from '../interfaces/ddbbPersonajes';
 
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/observable';
// import Rx from 'rxjs/Rx';
 
@Injectable({
  providedIn: 'root'
})
export class TestService {
 
  heroesURL = 'https://personajes-a64a6.firebaseio.com/pers.json'; // 'https://heroesapp-f8264.firebaseio.com/heroes.json';
  constructor(private http: HttpClient ) {   }
 
  nuevoHeroe ( heroe: DdbbPersonajes ) {
    let body = JSON.stringify( heroe);
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.heroesURL, body, {headers} ).pipe( res => {
      console.log(res);
      return res;
    });
  }
}
