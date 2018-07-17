import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../../services/getData.service';

@Component({
  selector: 'app-singlepersonaje',
  templateUrl: './singlepersonaje.component.html',
  styleUrls: ['./singlepersonaje.component.css']
})
// export class SinglepersonajeComponent implements OnInit {
  // constructor() { }
  // ngOnInit() {  }
// }

export class SinglepersonajeComponent  {
  // Creo un objeto
   heroe: any = {};

   constructor( private activarRuta: ActivatedRoute,
                private _dataService: GetDataService ) {
     /* Esta funcion retornara un observador,un observador es como una promesa,
     es algo que esta pendiente de esos cambios.
     En parametros nos retorna los valores
     */
     this.activarRuta.params.subscribe( parametros => {
       console.log('1-singlepersonaje...');
       console.log ( parametros );
       console.log('2-parametros...');
       // Para ver el parámetro id podria ser, esto porque en la ruta mandamos el id:
       console.log ( parametros['id']);
       console.log('3-parametros[id]...');
       this.heroe = this._dataService.getPersonaje(parametros['id']);
       console.log('4-_dataService.getPersonaje...');
       // console.log (this.heroe);
     });

    }
 }
