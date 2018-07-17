import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardpersonaje',
  templateUrl: './cardpersonaje.component.html',
  styleUrls: ['./cardpersonaje.component.css']
})

export class CardpersonajeComponent implements OnInit {

  @Input() inputpersonaje: any = {};
  @Input() index: number;

  constructor(private ruta: Router) {}

  ngOnInit() {
  }

  verSinglePersonaje(index) {
    console.log(this.index);
    console.log('GGG111');
    this.ruta.navigate( ['/singlepersonaje', index]);
  }

}
