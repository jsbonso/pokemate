import { Component, OnInit } from '@angular/core';
import { SearchPokemonsService } from '../search-pokemons.service';
import {Pokemon} from '../model/Pokemon';

@Component({
  selector: 'app-search-pokemons',
  templateUrl: './search-pokemons.component.html',
  styleUrls: ['./search-pokemons.component.css']
})
export class SearchPokemonsComponent implements OnInit {

  pokemon: string;
  pokemons: any[] = [];
  results: any[] = [];
  pokemonData: Pokemon[] = [];
  errorText : string;

  constructor(private searchService : SearchPokemonsService) { 

    this.searchService.getAllPokemons().subscribe(
        data => {
          this.pokemons = data.results;
          var id = 0;
            for (var _i = 0; _i < this.pokemons.length; _i++) {
                    var pokemon = this.pokemons[_i];
                    var obj = new Pokemon();
                    obj.name = pokemon.name; 
                    obj.id = ++id;
                    this.pokemonData.push(obj);
              }

              this.results =  this.pokemonData;
        },
        error => {
          this.pokemons = [];
          this.errorText = "Internal Error Occured. Please Try again";
          console.error(error);
        }
      );

  }

  ngOnInit() {
  }

  searchPokemonByName(searchTerm: string){
    this.results = [];
    for (var _i = 0; _i < this.pokemonData.length; _i++) {
       var pokemon =  this.pokemonData[_i];
       if (pokemon.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
           this.results.push(pokemon);
       }
    }
  }

}
