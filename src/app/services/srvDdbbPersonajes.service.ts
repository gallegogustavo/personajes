import { Injectable } from '@angular/core';
import { Configuration } from '../app.constants';
import { DdbbPersonajes } from '../interfaces/ddbbPersonajes';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class SrvDdbbPersonajesService {


  private actionUrl: string;

constructor( private http: HttpClient) {
}

private conf = 'https://personajes-a64a6.firebaseio.com/personajes.json';

get ( ) {
  console.log('hola');
}

Put ( objPersonaje: DdbbPersonajes ) {

   console.log(JSON.stringify(objPersonaje));
   console.log(this.conf);
   let body = JSON.stringify(objPersonaje);

   let headers = new HttpHeaders ({
       'Content-Type': 'application/json'
     });
   return this.http.post(this.conf, body, {headers} ).pipe( res => {
      console.log(res);
      return res;
    });
 }

}
