import { Component, OnInit } from "@angular/core";
import { PokedexService } from "../pokedex.service";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.css"],
})
export class PokemonComponent implements OnInit {
  constructor(private service: PokedexService) {
  }

  get pokemons() {
    return this.service.pokemons;
  }

  get favorited() {
    return this.service.favorited;
  }

  changeState(id: string) {
    this.favorited[Number(id) - 1] = !this.favorited[Number(id) - 1];
  }

  getPokemonById(id: string) {
    this.service.getPokemonById(String(Number(id) - 1));
  }

  deletePokemon(id: string) {0
    this.service.deletePokemon(id)
  }

  ngOnInit(): void {}
}
