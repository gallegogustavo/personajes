import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './personajes.routing';
import { GetDataService } from './services/getData.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { AboutComponent } from './components/about/about.component';
import { RelatedpagesComponent } from './components/relatedpages/relatedpages.component';
import { SinglepersonajeComponent } from './components/singlepersonaje/singlepersonaje.component';
import { SearchComponent } from './components/search/search.component';
import { CardpersonajeComponent } from './components/cardpersonaje/cardpersonaje.component';
import { AllcharactersComponent } from './components/allcharacters/allcharacters.component';
import { OnecharacterComponent } from './components/onecharacter/onecharacter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    PersonajeComponent,
    AboutComponent,
    RelatedpagesComponent,
    SinglepersonajeComponent,
    SearchComponent,
    CardpersonajeComponent,
    AllcharactersComponent,
    OnecharacterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
