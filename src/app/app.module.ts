import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchPokemonsComponent } from './search-pokemons/search-pokemons.component';
import { SearchPokemonsService } from './search-pokemons.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchPokemonsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SearchPokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
