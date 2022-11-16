import { Injectable } from "@angular/core";
import pokedex from "pokedex.json";

@Injectable({
 providedIn: "root",
})
export class PokedexService {
 pokemons: namespace.RootObject[] = pokedex;
 favorited: boolean[] = [];
 selected: number = 0;
 
 constructor() {
  for (let i = 0; i < this.pokemons.length; i++) {
   this.favorited.push(false);
  }
 }
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
