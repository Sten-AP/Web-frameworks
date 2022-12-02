import { Injectable } from '@nestjs/common';
import { PokemonInterface } from '../pokemon_interface/pokemon_interface.interface';
import * as pokemonData from '../pokedex.json';

@Injectable()
export class PokemonServiceService {
  pokemons: PokemonInterface[] = pokemonData;

  getAllPokemon() {
    return this.pokemons;
  }

  getPokemonById(id: string) {
    return this.pokemons.find((pokemon) => pokemon.id === id);
  }

  createPokemon(pokemon) {
    return console.log(pokemon);
  }

  updatePokemon(id, pokemon) {
    return console.log(id, pokemon);
  }

  deletePokemon(id) {
    return console.log(id);
  }
}
