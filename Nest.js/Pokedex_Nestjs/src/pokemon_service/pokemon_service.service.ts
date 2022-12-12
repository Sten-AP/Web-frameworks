import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PokemonInterface } from '../pokemon_interface/pokemon_interface.interface';
import * as pokemonData from '../pokedex.json';

@Injectable()
export class PokemonServiceService {
  pokemons: PokemonInterface[] = pokemonData;

  getAllPokemon(): PokemonInterface[] {
    return this.pokemons;
  }

  private assertExists(id: string) {
    const pokemon = this.pokemons.find((p) => p.id === id);
    if (!pokemon) {
      throw new HttpException('Pokemon not found', HttpStatus.NOT_FOUND);
    }
  }

  public getPokemonById(id: string) {
    this.assertExists(id);
    return this.pokemons.find((p) => p.id === id);
  }

  public createPokemon(pokemon: PokemonInterface) {
    pokemon.id = (
      Math.max(...this.pokemons.map((p) => parseInt(p.id))) + 1
    ).toString();
    this.pokemons.push(pokemon);
    return pokemon;
  }

  public updatePokemon(id: string, pokemon: PokemonInterface) {
    this.assertExists(id);
    const index = this.pokemons.findIndex((p) => p.id === id);
    pokemon.id = id;
    this.pokemons[index] = pokemon;
    return pokemon;
  }

  public deletePokemon(id: string) {
    this.assertExists(id);
    const index = this.pokemons.findIndex((p) => p.id === id);
    this.pokemons.splice(index, 1);
  }
}
