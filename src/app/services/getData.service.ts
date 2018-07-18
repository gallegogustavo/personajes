import { NAMED_ENTITIES } from '@angular/compiler/public_api';
import { Injectable } from '@angular/core';
import { Personajes } from './getData.service';

@Injectable({
  providedIn: 'root'
})

export class GetDataService {

  private personajes: Personajes[] = [
    { name: 'Homero',
      bio: 'Básicamente, Homero es una sátira de los norteamericanos promedio, en palabras de su mismo creador Matt Groening. Las bromas indirectas se pueden encontrar en su personalidad, su actitud, su filosofía, su idiosincrasia, etc. Los rasgos esenciales de la personalidad de Homer se presentaron desde sus inicios. No se sabe bien donde nació, pero pudo haber sido en Springfield. Después de los 11 años fue criado únicamente por su padre Abraham Simpson, ya que su madre tuvo que huir de la justicia por paralizar los negocios del Sr. Burns.',
      image: 'assets/homerosimpson.jpg',
      link: 'http://es.simpsons.wikia.com/wiki/Homer_Simpson'},
    { name: 'Marge',
      bio: 'El personaje de Marge Simpson ha ahondado en los roles arquetípicos que suelen desempeñar las esposas amas de casa en las series de animación, en la misma línea promovida por Hanna Barbera con Vilma Picapiedra o Jane Jetson. Su apasionada y ciega dedicación a su desagradecida familia ha servido de modelo moderno para otros personajes femeninos en series de animación posteriores. Por ello, ha sido considerada como la mejor madre tanto ficticia como real por el público británico.',
      image: 'assets/margesimpson.jpg',
      link: 'http://es.simpsons.wikia.com/wiki/Marge_Simpson'},
    { name: 'Bart',
      bio: 'Bart es decididamente el más rebelde y travieso de la familia. Es un muchacho simpático y también muy travieso, que hace muchas bromas con su mejor amigo Milhouse. Sigue los programas de su ídolo Krusty el Payaso. Es desobediente y hace todo lo que le pasa por la cabeza. Su nombre es un anagrama de "brat", que en inglés significa "travieso". Su ideología es "yo no fui, nadie me vio, no pueden demostrarlo". También en un capítulo Seymour Skinner descubre que es alérgico al camarón.',
      image: 'assets/Bart_Simpson.png',
      link: 'http://es.simpsons.wikia.com/wiki/Bart_Simpson'},
    { name: 'Lisa',
      bio: 'Lisa Simpson desempeña el papel del miembro de la familia destacado, con un gran futuro por delante del que apenas se aprovecha su potencial intelectual. Representa la niñita de ocho años superdotada, activista, idealista, responsable y frustrada; cuyas ganas de hacerse mayor y querer ser tratada como una persona adulta chocan constantemente con su edad y crecimiento. Sus dos roles principales en la serie consisten en plantear los problemas típicos que conlleva la convivencia de dos hermanos de diferente sexo con apenas dos años de diferencia y en cuestionar constantemente los valores del mundo adulto a través de un prisma infantil excesivamente crítico e ingenuo. Los guionistas de la serie aprovechan la presencia de este personaje no sólo para desarrollar capítulos con tramas de contenido ecologista e idealista, pero también para denunciar el trato humano hacia la naturaleza y criticar las inconsistencias o injusticias de las ideologías y religiones occidentales.',
      image: 'assets/Lisa_Simpson.png',
      link: 'http://es.simpsons.wikia.com/wiki/Lisa_Simpson'},
    { name: 'Maggie',
      bio: 'Maggie tiene una gran capacidad de comunicación y a pesar de ser un bebe, ha demostrado ser muy inteligente. Ella no tiene aprecio por casi ningún otro niño, en especial por Gerald, el bebé de una sola ceja, por lo tanto no tiene amigos pero se le ve ayudando en la guardería en el episodio "Un tranvía llamado Marge". Su primera palabra fue "papi", la que dijo en el episodio "La primera palabra de Maggie". También dijo "secuela" (The Simpsons Movie), "perfectirijillo" y "Ja" (Sí en noruego) (Coming to Homerica). Maggie es la favorita de Homer, el cual la ignora muchas veces o no sabe que existe en algunos capítulos.',
      image: 'assets/Maggie_Simpson.png',
      link: 'http://es.simpsons.wikia.com/wiki/Maggie_Simpson'}
  ];

  getPersonajes(): Personajes[] {
    return this.personajes;
  }

  getPersonaje(index: string) {
    return this.personajes[index];
  }

  searchPersonajes( termino: string): Personajes[] {
    console.log('termino: ' + termino);
    // Creo una variable de arreglo de heroe
    let personajeArr: Personajes[] = [];

    termino = termino.toLowerCase();
    // for ( let personaje of this.personajes ) {

    //   let bio = personaje.bio.toLowerCase();

    //   if ( bio.indexOf( termino ) >= 0 ) {
    //       console.log(personajeArr.push(personaje));
    //   }
    // }
    for ( let i = 0; i < this.personajes.length; i ++ ){
      let personaje = this.personajes[i];
      let bio = personaje.bio.toLowerCase();

      if ( bio.indexOf( termino ) >= 0 ) {
        personaje.idx = i;
        console.log('El indice es: ' + personaje.idx);
        console.log(personajeArr.push(personaje));
      }
    }
    return personajeArr;
  }

  constructor() {
    console.log(' Servicio listo para ser usado ');
  }

}



export interface Personajes {
  name: string;
  bio: string;
  image: string;
  link: string;
  idx?: number;
}
