import { Injectable } from '@angular/core';
// import { Configuration } from '../app.constants';
import { DdbbPersonajes } from '../interfaces/ddbbPersonajes';
import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { map, catchError, tap } from 'rxjs/operators';
// import { Observable, of } from 'rxjs';
// import { errorHandler } from '../../../node_modules/@angular/platform-browser/src/browser';



@Injectable({
  providedIn: 'root'
})

export class SrvDdbbPersonajesService {


  // private actionUrl: string;

constructor( private http: HttpClient) {
}

conf = 'https://personajes-a64a6.firebaseio.com/personajes.json';

get ( ) {
  console.log('hola');
}

AddPersonaje ( objPersonaje: DdbbPersonajes ) {

   // console.log(JSON.stringify(objPersonaje));
   // console.log(this.conf);
   let body = JSON.stringify(objPersonaje);

   let headers = new HttpHeaders ({ 'Content-Type': 'application/json' });
  
   console.log(this.conf);
   console.log(body);
   console.log({headers});
   return this.http.post(this.conf, body, {headers}).pipe( res => {
      console.log(res);  return res;
    });
 }

// , catchError(this.handleError('error', []))
 /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
/**
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    // this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
*/

}
