import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { AboutComponent } from './components/about/about.component';
import { SinglepersonajeComponent } from './components/singlepersonaje/singlepersonaje.component';
import { SearchComponent } from './components/search/search.component';
import { AllcharactersComponent } from './components/allcharacters/allcharacters.component';
import { OnecharacterComponent } from './components/onecharacter/onecharacter.component';

const APP_ROUTES: Routes = [
  { path: '',     redirectTo: 'home',     pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'personaje', component: PersonajeComponent },
  { path: 'about', component: AboutComponent },
  // Vamos a pasar un parametro a la ruta con heroe/:id
  { path: 'singlepersonaje/:id', component: SinglepersonajeComponent },

  // Vamos a pasar un parametro a la ruta con busca/:termino
  { path: 'search/:termino', component: SearchComponent },

  { path: 'Allcharacters', component: AllcharactersComponent },
  { path: 'Onecharacter/:id/:action', component: OnecharacterComponent},
  { path: 'Onecharacter', component: OnecharacterComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class APP_ROUTING { }
