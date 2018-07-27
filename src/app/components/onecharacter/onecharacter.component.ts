import { Component, OnInit } from '@angular/core';
// se debe importar el forms en el formulario a conectar a un webservice y se debe importar tambien
// en el app.module
import { NgForm } from '@angular/forms';
import { DdbbPersonajes } from '../../interfaces/ddbbPersonajes';
import { SrvDdbbPersonajesService } from '../../services/srvDdbbPersonajes.service';

// import { Subscriber } from '../../../../node_modules/rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-onecharacter',
  templateUrl: './onecharacter.component.html',
  styleUrls: ['./onecharacter.component.css']
})

export class OnecharacterComponent implements OnInit {

  formPersonajes: DdbbPersonajes = {
    name: '', bio: '', image: '', link: ''
  };

  personajeid: string;
  action: number;
  /**
  private data: DdbbPersonajes = {
    name: 'a', bio: 'b', image: 'c', link: 'd'
  };
  */
  persrec: DdbbPersonajes [] = [];

  constructor(private ws: SrvDdbbPersonajesService, private route: ActivatedRoute) {  }

  ngOnInit() {
    // console.log('inicio onecharacter.ngoninit');

    this.route.params.subscribe( parametros => {
      this.personajeid = parametros['id'];
      this.action = parametros['action'];
    });

    if (this.action > 1) {
      this.formPersonajes = this.getOne(this.personajeid);
      // console.log(this.formPersonajes);
    }

    // console.log('fin onecharacter.ngoninit');
  }

  getOne(pid: string): DdbbPersonajes {
    // console.log('inicio function getOne...');
    let _personajes: DdbbPersonajes = {
      name: '', bio: '', image: '', link: ''
    };

    this.ws.GetOne(this.personajeid).subscribe(data => {
      // console.log(JSON.parse(JSON.stringify(data)));
      // console.log(data);
      for (let value in data) {
        // console.log(data[value]);
        _personajes[value] = data[value];
        // console.log(_personajes[value]);
        };
      // country = jsonConvert.deserialize(jsonObject, Country);
      // this.persrec.push(JSON.parse(JSON.stringify(data)));
      // console.log(data);
      // this.persrec.push(data);
    });

    // console.log('ggg3');
    // console.log(_personajes);
    // console.log('ggg4');
    return _personajes;
  }

  // save() {
  //  this.ws.AddPersonaje(this.formPersonajes);
  // }

  // update() {
  //  this.ws.UpdatePersonaje(this.formPersonajes);
  // }

  genericAction(paction: number) {

    if (paction.toString() === '3') {

      if (confirm('Está seguro de eliminar el regstro?')) {
        this.ws.ABMPersonaje(this.formPersonajes, paction, this.personajeid);
      }
    } else {

        this.ws.ABMPersonaje(this.formPersonajes, paction, this.personajeid);
      }

    if (paction.toString() === '1') {
      console.log('reload');
      this.ngOnInit();
    }
}

}

