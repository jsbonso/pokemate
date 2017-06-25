import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchPokemonsService {

  private pokemonAPI = "http://pokeapi.co/api/v2/pokemon?limit=151";

  constructor(private http: Http) { }

   getAllPokemons() {
      return this.http.get(this.pokemonAPI)
        .map((res: Response) => res.json())
        .catch(this.handleError);
  
  }

  searchPokemonByName(name: string) {
    if (name) {
      return this.http.get(this.pokemonAPI)
        .map((res: Response) => res.json())
        .catch(this.handleError);
    }
  }
 
  private extractData(res: Response) {
    let body = res.json();
    return body.items || {};
  }
 
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
