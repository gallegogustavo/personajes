import { Injectable } from '@angular/core';
// import { Configuration } from '../app.constants';
import { DdbbPersonajes } from '../interfaces/ddbbPersonajes';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { mapChildrenIntoArray } from '../../../node_modules/@angular/router/src/url_tree';
import { map, catchError, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
// import { Observable, of } from 'rxjs';
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


ABMPersonaje ( objPersonaje: DdbbPersonajes, action: number) {

  /**
  if (action === 1) {
    this.link2register = this.conf + '.json';
  } else {
    this.link2register = this.conf + '/-LICSE-aGdbjIJeB6KQa.json';
  }
  */

  let body = JSON.stringify(objPersonaje);

  let headers = new HttpHeaders ({ 'Content-Type': 'application/json' });

    // console.log(this.link2register);

    switch (action) {
      case 1: {
        // insert
        this.link2register = this.conf + '.json';

        return this.http.post(this.link2register, body, {headers}).subscribe(
          data => {this.router.navigate(['/Onecharacter', data])
          }, error => {console.error(error); alert('error'); });
        // break;
      }
      case 2: {
         // update
        this.link2register = this.conf + '/-LICSE-aGdbjIJeB6KQa.json';

        return this.http.put(this.link2register, body, {headers}).subscribe(
          data => {this.router.navigate(['/Onecharacter', data])
        }, error => {console.error(error); alert('error'); });
        // break;
      }
      default: {
         // delete
        this.link2register = this.conf + '/-LICSE-aGdbjIJeB6KQa.json';

        return this.http.delete(this.link2register, {headers}).subscribe(
          data => {this.router.navigate(['/Onecharacter', data])
        }, error => {console.error(error); alert('error'); });
        // break;
      }
   }
}




GetAll() {

  // this.newdata = [];
  console.log('inicio getall');
  this.link2register = this.conf + '.json';

  const _params = new HttpParams();

  return this.http.get(this.link2register,
    {
        headers: new HttpHeaders().set('Accept', 'aplication/json')
    }).pipe(map(res => {
      return res;
    }));
}

/*
Cambios sugeridos
*/
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
/*
Fin Cambios sugeridos
*/
GetOne(pid: string) {

  console.log('srvDdbbPersonajes.GetOne:' + pid);

  // this.newdata = [];
  // console.log('inicio getall');
  this.link2register = this.conf + '.json';

  let _params = new HttpParams().set('key', pid);

  let _headers = new HttpHeaders().set('Content-Type', 'aplication/json');
  // headers.append('Content-Type', 'application/json');
  // let headers = new HttpHeaders().set('header1', hvalue1); // create header object
  // headers = headers.append('header2', hvalue2); // add a new header, creating a new object
  // headers = headers.append('header3', hvalue3); // add another header

// let params = new HttpParams().set('param1', value1); // create params object
// params = params.append('param2', value2); // add a new param, creating a new object
// params = params.append('param3', value3); // add another param

// headers: _headers,
  return this.http.get(this.link2register,
    {
      headers: _headers, params: _params
    }).pipe(map(res => {
      console.log(res); console.log('ggg');
      return res;
    }, error => {console.error(error); alert('error'); }));

}


// data => { this.contact = []; data.forEach( ( x ) => { this.contact.push( x ); } );}, err => { } 

// res => this.data = res    funciona
// data => console.log(data)


/**getaction (action: number) {
    if (action === 1) {
      return 'post';
    } else {
      if (action === 3) {
        return 'delete';
      } else {
        return 'put';
      }
    }
}*/

}
