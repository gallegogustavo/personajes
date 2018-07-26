import { Component, OnInit } from '@angular/core';
// se debe importar el forms en el formulario a conectar a un webservice y se debe importar tambien
// en el app.module
import { NgForm } from '@angular/forms';
import { DdbbPersonajes } from '../../interfaces/ddbbPersonajes';
import { SrvDdbbPersonajesService } from '../../services/srvDdbbPersonajes.service';

// import { Subscriber } from '../../../../node_modules/rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onecharacter',
  templateUrl: './onecharacter.component.html',
  styleUrls: ['./onecharacter.component.css']
})

export class OnecharacterComponent implements OnInit {

  // ws: SrvDdbbPersonajesService;

  formPersonajes: DdbbPersonajes = {
    name: '', bio: '', image: '', link: ''
  };

  personajeid: string;
  action: number;
  private data: DdbbPersonajes = {
    name: 'a', bio: 'b', image: 'c', link: 'd'
  };
  persrec: DdbbPersonajes[] = [];

  constructor(private ws: SrvDdbbPersonajesService, private route: ActivatedRoute) {  }

  ngOnInit() {
    console.log('onecharacter.ngoninit');
    /**this.personajeid = this.route.params['id'];
    console.log(this.personajeid);
    this.action = this.route.params['action'];
    console.log(this.action);*/

    this.route.params.subscribe( parametros => {
      this.personajeid = parametros['id'];
      this.action = parametros['action'];
    });
    console.log(this.personajeid);
    console.log(this.action);

    if (this.action > 1) {
      this.formPersonajes = this.getOne(this.personajeid);
    }

    console.log('fin onecharacter.ngoninit');
  }
 
  getOne(pid: string): DdbbPersonajes {
    console.log('inicio component.getOne');
    this.ws.GetOne(this.personajeid).subscribe(data => {
      console.log(data);
    });
    return this.data;
  }

  save() {

    this.ws.AddPersonaje(this.formPersonajes);

  }

  update() {

    this.ws.UpdatePersonaje(this.formPersonajes);
  }

  genericAction(action: number) {
    this.ws.ABMPersonaje(this.formPersonajes, action);
  }

}
