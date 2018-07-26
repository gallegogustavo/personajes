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
  enable: boolean;

  constructor(private ws: SrvDdbbPersonajesService) { }

  ngOnInit() {
    console.log('inico ngOnInit');
    this.enable = false;
    this.personajesrecuperados = this.get();


    console.log(this.personajesrecuperados);
    console.log('fin ngOnInit');
    this.enable = true;
  }

  get(): DdbbPersonajes[] {
    console.log('function get...');
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
