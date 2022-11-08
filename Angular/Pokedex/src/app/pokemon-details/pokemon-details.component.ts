import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import pokedex from "pokedex.json";

@Component({
 selector: "app-pokemon-details",
 templateUrl: "./pokemon-details.component.html",
 styleUrls: ["./pokemon-details.component.css"],
})
export class PokemonDetailsComponent implements OnInit {
 pokemons: namespace.RootObject[] = pokedex;
 id: number = 0;
 constructor(private route: ActivatedRoute) {}

 ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
   this.id = Number(params.get("id")) - 1;
  });
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
