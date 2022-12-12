import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PokedexService {
  pokedexAPI = "http://localhost:3000/pokemons";
  pokemons: pokemons.IPokemon[] = [];
  favorited: boolean[] = [];
  selected: number = 0;

  constructor(private _http: HttpClient) {
    this.Ophalen();
    for (let i = 0; i < this.pokemons.length; i++) {
      this.favorited.push(false);
    }
  }

  GetPokedex() {
    return this._http.get<pokemons.IPokemon[]>(this.pokedexAPI).toPromise();
  }

  getPokemonById(id: string) {
    return this._http.get<pokemons.IPokemon[]>(this.pokedexAPI + "/" + id);
  }

  deletePokemon(id: string) {
    return this._http.delete<pokemons.IPokemon[]>(this.pokedexAPI + "/" + id);
  }

  async Ophalen() {
    console.log("Pokemon gegevens ophalen");
    await this.GetPokedex()
      .then((data) => {
        if (typeof data != "undefined") this.pokemons = data;
        console.log("Gegevens zijn binnen");
      })
      .catch((error) => {
        console.log("Er is een fout opgetreden");
      });
  }
}

declare module pokemons {
  export interface ISprites {
    normal: string;
    animated: string;
  }

  export interface IPokemon {
    id: string;
    species_id: string;
    height: string;
    weight: string;
    base_experience: string;
    order: string;
    is_default: string;
    name: string;
    sprites: ISprites;
  }
}
