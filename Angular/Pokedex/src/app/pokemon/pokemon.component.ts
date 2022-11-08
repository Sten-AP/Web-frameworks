import { Component, OnInit } from "@angular/core";
import pokedex from "pokedex.json";

@Component({
 selector: "app-pokemon",
 templateUrl: "./pokemon.component.html",
 styleUrls: ["./pokemon.component.css"],
})
export class PokemonComponent implements OnInit {
 pokemons: namespace.RootObject[] = pokedex;

 constructor() {}

 ngOnInit(): void {}
}

declare module namespace {
 export interface Sprites {
  normal: string;
  animated: string;
 }

 export interface RootObject {
  id: string;
  species_id: string;
  height: string;
  weight: string;
  base_experience: string;
  order: string;
  is_default: string;
  name: string;
  sprites: Sprites;
 }
}
