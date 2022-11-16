import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokedexService } from "../pokedex.service";

@Component({
 selector: "app-pokemon-details",
 templateUrl: "./pokemon-details.component.html",
 styleUrls: ["./pokemon-details.component.css"],
})
export class PokemonDetailsComponent implements OnInit {
 id: number = 0;
 service: PokedexService;

 constructor(private route: ActivatedRoute, service: PokedexService) {
  this.service = service;
 }

 get pokemons() {
  return this.service.pokemons;
 }

 get selected() {
  return this.service.selected;
 }

 get favorited() {
  return this.service.favorited[this.selected];
 }

 ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
   this.id = Number(params.get("id")) - 1;
  });
 }
}
