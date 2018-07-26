import { Component, OnInit } from '@angular/core';
// se debe importar el forms en el formulario a conectar a un webservice y se debe importar tambien
// en el app.module
import { NgForm } from '@angular/forms';
import { DdbbPersonajes } from '../../interfaces/ddbbPersonajes';
import { SrvDdbbPersonajesService } from '../../services/srvDdbbPersonajes.service';

// import { Subscriber } from '../../../../node_modules/rxjs';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-onecharacter',
  templateUrl: './onecharacter.component.html',
  styleUrls: ['./onecharacter.component.css']
})

export class OnecharacterComponent implements OnInit {

  // ws: SrvDdbbPersonajesService;

  formPersonajes: DdbbPersonajes = {
    name: 'A', bio: 'S', image: 'D', link: 'F'
  };

  constructor(private ws: TestService) {  }

  ngOnInit() {
  }


  save() {

    // console.log(JSON.stringify(this.formPersonajes));
    // this.ws.get();
    this.ws.nuevoHeroe(this.formPersonajes).subscribe ( data => {
      console.log('Obtengo esta data: ');
      console.log(data);
    })

  }
}
