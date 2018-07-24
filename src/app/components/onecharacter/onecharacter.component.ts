import { Component, OnInit } from '@angular/core';
// se debe importar el forms en el formulario a conectar a un webservice y se debe importar tambien
// en el app.module
import { NgForm } from '@angular/forms';
import { DdbbPersonajes } from '../../interfaces/ddbbPersonajes';
import { SrvDdbbPersonajesService } from '../../services/srvDdbbPersonajes.service';

// import { Subscriber } from '../../../../node_modules/rxjs';

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

  constructor(private ws: SrvDdbbPersonajesService) { }

  ngOnInit() {
  }


  save() {

    // console.log(JSON.stringify(this.formPersonajes));
    // this.ws.get();
    this.ws.AddPersonaje(this.formPersonajes);

  }
}
