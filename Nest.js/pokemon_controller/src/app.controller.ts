import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { PokemonServiceService } from './pokemon_service/pokemon_service.service';

@Controller()
export class AppController {
  constructor(private PokemonService: PokemonServiceService) {}

  @Get('pokemon')
  getAllPokemon() {
    return this.PokemonService.getAllPokemon();
  }

  @Get('pokemon/:id')
  getPokemonById(@Param('id') id: string) {
    return this.PokemonService.getPokemonById(id);
  }

  @Post('pokemon')
  createPokemon(pokemon: string) {
    return this.PokemonService.createPokemon(pokemon);
  }

  @Put('pokemon/:id')
  updatePokemon(id: number, pokemon: string) {
    return this.PokemonService.updatePokemon(id, pokemon);
  }

  @Delete('pokemon/:id')
  deletePokemon(@Param('id') id: number) {
    return this.PokemonService.deletePokemon(id);
  }
}
