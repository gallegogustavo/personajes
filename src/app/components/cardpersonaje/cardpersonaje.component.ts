import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardpersonaje',
  templateUrl: './cardpersonaje.component.html',
  styleUrls: ['./cardpersonaje.component.css']
})

export class CardpersonajeComponent implements OnInit {

  @Input() inputpersonaje: any = {};
  @Input() index: number;

 // debemos indicarle que va emitir esta función
 @Output() simpsonSeleccionado: EventEmitter<number>;

  constructor(private ruta: Router) {
    // Inicializo el eventemitter
    this.simpsonSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  // verSinglePersonaje(index) {
  //  console.log(this.index);
  //  console.log('GGG111');
  //  this.ruta.navigate( ['/singlepersonaje', index]);
  // }

  verSinglePersonaje() {
    console.log( this.index);
    console.log('GGG222');
    this.ruta.navigate(['/singlepersonaje', this.index]);
    this.simpsonSeleccionado.emit(this.index);
  }

}
