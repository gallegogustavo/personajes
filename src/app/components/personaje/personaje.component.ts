import { Component, OnInit } from '@angular/core';
import { GetDataService, Personajes} from '../../services/getData.service';
// Necesitamos importar esto para poder recibir los parametros
import { Router } from '@angular/router';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})

export class PersonajeComponent implements OnInit {

  personajesrecuperados: Personajes[] = [];

  constructor(private _personajesService: GetDataService,
              private ruta: Router) {}

  ngOnInit() {
    this.personajesrecuperados = this._personajesService.getPersonajes();
    console.log(this.personajesrecuperados);
  }

  // Para saber que heroe vamos a mostrar
  verSinglePersonaje( index: number ) {
    console.log(index);

    this.ruta.navigate( ['/singlepersonaje', index]);
  }


}
