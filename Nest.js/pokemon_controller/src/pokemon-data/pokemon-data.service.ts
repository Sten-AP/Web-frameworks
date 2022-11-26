import { Injectable } from '@nestjs/common';

@Injectable()
export class PokemonDataService {
  getAllPokemon() {
    return;
  }
  getPokemonById(id) {
    return console.log(id);
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
