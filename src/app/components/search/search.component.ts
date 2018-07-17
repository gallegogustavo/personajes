import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../../services/getData.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

    // Pueden ser muchas las coincidencia con las busquedas
    personajes: any[] = [];
    termino: string;

  constructor(private activatedRoute: ActivatedRoute,
            private _personajesService: GetDataService ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
    this.termino = params['termino'];
    this.personajes = this._personajesService.searchPersonajes(params['termino']);
    console.log(this.personajes);
    });
  }

}
