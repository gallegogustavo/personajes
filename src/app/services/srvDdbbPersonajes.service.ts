import { Injectable } from '@angular/core';
// import { Configuration } from '../app.constants';
import { DdbbPersonajes } from '../interfaces/ddbbPersonajes';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
// import { mapChildrenIntoArray } from '../../../node_modules/@angular/router/src/url_tree';
import { map, catchError, tap, timestamp } from 'rxjs/operators';

import { Router, ActivatedRoute } from '@angular/router';
// import { Observable } from '../../../node_modules/rxjs';

import { Observable } from 'rxjs';
// import { errorHandler } from '../../../node_modules/@angular/platform-browser/src/browser';



@Injectable({
  providedIn: 'root'
})

export class SrvDdbbPersonajesService {

  private link2register: string;
  private newdata: any;

constructor( private http: HttpClient,
  private router: Router) {
}

conf = 'https://personajes-a64a6.firebaseio.com/personajes';

get ( ) {
  console.log('hola');
}


UpdatePersonaje (objPersonaje: DdbbPersonajes) {

  let link2register = this.conf + '/-LICSE-aGdbjIJeB6KQa.json';

  let body = JSON.stringify(objPersonaje);

  let headers = new HttpHeaders ({ 'Content-Type': 'application/json' });

  return this.http.put(link2register, body, {headers}).subscribe(
      data => {this.router.navigate(['/Onecharacter', data])
    }, error => {console.error(error); alert('error'); });
}

AddPersonaje ( objPersonaje: DdbbPersonajes) {

  // console.log(this.getaction(3));

  let link2register = this.conf + '.json';

  let body = JSON.stringify(objPersonaje);

  let headers = new HttpHeaders ({ 'Content-Type': 'application/json' });

  return this.http.post(link2register, body, {headers}).subscribe(
        data => {
          this.router.navigate(['/Onecharacter', data] )
      }, error => {
            console.error(error); alert('error');
          });


}


ABMPersonaje ( objPersonaje: DdbbPersonajes,
              action: number,
              personajeid: string) {

  /**
  if (action === 1) {
    this.link2register = this.conf + '.json';
  } else {
    this.link2register = this.conf + '/-LICSE-aGdbjIJeB6KQa.json';
  }
  */


  console.log('ABMPersonaje');
  console.log(objPersonaje);
  console.log(action);

  let body = JSON.stringify(objPersonaje);
  console.log('body:' + body);
  let headers = new HttpHeaders ({ 'Content-Type': 'application/json' });

  switch (action.toString()) {
    case '1': {
        // insert
        this.link2register = this.conf + '.json';
        return this.http.post(this.link2register, body, {headers}).subscribe(
          data => {this.router.navigate(['/Onecharacter', '0', 1]);
          }, error => {console.error(error); alert('error'); });
         // break;
    }
    case '2': {
         // update
         this.link2register = this.conf + '/' + personajeid + '.json';
         return this.http.put(this.link2register, body, {headers}).subscribe(
           data => {alert('Operación completada con éxito!'); this.router.navigate(['/Allcharacters']);
         }, error => {console.error(error); alert('error'); });
         // break;
    }
    case '3': {
        // delete
        this.link2register = this.conf + '/' + personajeid + '.json';
        return this.http.delete(this.link2register, {headers}).subscribe(
          data => {alert('Operación completada con éxito!'); this.router.navigate(['/Allcharacters']);
          }, error => {console.error(error); alert('error'); });
        // break;
    }
    default: {
      console.log('default');
      break;
    }
  }
  /** 
    switch (action) {
      case 1: {
        // insert
        this.link2register = this.conf + '.json';
        console.log(body);
        // return this.http.post(this.link2register, body, {headers}).subscribe(
        //  data => {this.router.navigate(['/Onecharacter', data]);
        //  }, error => {console.error(error); alert('error'); });
        break;
      }
      case 2: {
         // update
        this.link2register = this.conf + '/-LICSE-aGdbjIJeB6KQa.json';

        return this.http.put(this.link2register, body, {headers}).subscribe(
          data => {this.router.navigate(['/Onecharacter', data]);
        }, error => {console.error(error); alert('error'); });
        // break;
      }
      default: {
         // delete
        this.link2register = this.conf + '/-LICSE-aGdbjIJeB6KQa.json';

        return this.http.delete(this.link2register, {headers}).subscribe(
          data => {this.router.navigate(['/Onecharacter', data]);
        }, error => {console.error(error); alert('error'); });
        // break;
      }
   }
   */
}




GetAll() {
  this.link2register = this.conf + '.json';
  let _headers = new HttpHeaders().set('Content-Type', 'aplication/json');
  return this.http.get(this.link2register,
    {
      headers: _headers
    }).pipe(map(res => {
      return res;
    }, error => {console.error(error); alert('error'); }));
    // headers: new HttpHeaders().set('Accept', 'aplication/json')
}
/** 
GetOne(pid: string): any {
  this.link2register = this.conf + '/' + pid + '.json';
  let _headers = new HttpHeaders().set('Content-Type', 'aplication/json');
  return this.http.get(this.link2register,
    {
      headers: _headers
    }).pipe(map(res => {
      return res;
    }, error => {console.error(error); alert('error'); }));
}
*/
GetOne(pid: string) {
  this.link2register = this.conf + '/' + pid + '.json';
  let _headers = new HttpHeaders().set('Content-Type', 'aplication/json');
  return this.http.get(this.link2register)
                  .pipe(map(res => {
                    return res;
                  }));
}

private extractData(res: Response) {
  console.log('ggg1'); console.log(res); console.log('ggg2');
  let body = res.json();
  console.log(body);
  return ''; // body.data || { };
}

/*
Cambios sugeridos
*/
/** 
heroeURL = 'https://personajes-a64a6.firebaseio.com/';

get(id:string){
  let headers = new HttpHeaders ({
    'Content-Type': 'application/json'
  });

  let url = this.heroeURL + "heroes/" + id + ".json";

  return this.http.get(url, {headers} ).pipe(map(res => {
    console.log(res);
    return res;
  }));
}
*/
/*
Fin Cambios sugeridos
*/

}
