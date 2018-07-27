import { Component, OnInit } from '@angular/core';
import { DdbbPersonajes } from '../../interfaces/ddbbPersonajes';
import { SrvDdbbPersonajesService } from '../../services/srvDdbbPersonajes.service';

@Component({
  selector: 'app-allcharacters',
  templateUrl: './allcharacters.component.html',
  styleUrls: ['./allcharacters.component.css']
})

export class AllcharactersComponent implements OnInit {

  personajesrecuperados: DdbbPersonajes[] = [];
  persrec: DdbbPersonajes[] = [];
  // enable: boolean;

  constructor(private ws: SrvDdbbPersonajesService) { }

  ngOnInit() {
    console.log('inicio allcharacters.ngOnInit');
    // this.enable = false;
    this.personajesrecuperados = this.getAll();
    console.log(this.personajesrecuperados);
    console.log('fin allcharacters.ngOnInit');
    // this.enable = true;
  }

  getAll(): DdbbPersonajes[] {
    console.log('inicio function getAll...');
      this.ws.GetAll().subscribe(data => {
        for(let dato in data) {
          let x = data[dato]; 
          x.key = dato; 
          this.persrec.push(x);  
        }	
    });

    return this.persrec;

    /** .subscribe(data => {
      for(let dato in data) {
        let x = data[dato];
        x.key = dato; 
        this.persrec.push(x);
      }	
    });
    */
  }
}
