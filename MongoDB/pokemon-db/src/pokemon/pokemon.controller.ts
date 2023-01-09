import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.interface';

@Controller('pokemon')
export class PokemonController {
  constructor(private PS: PokemonService) {}

  @Get()
  public getAllPokemon() {
    return this.PS.getAllPokemon();
  }

  @Get(':id')
  public getPokemonById(@Param('id') id: string) {
    return this.PS.getPokemonById(id);
  }

  @Post()
  public createPokemon(@Body() pokemon: Pokemon) {
    return this.PS.createPokemon(pokemon);
  }

  @Put(':id')
  public updatePokemon(@Body() pokemon: Pokemon, @Param('id') id: string) {
    return this.PS.updatePokemon(id, pokemon);
  }

  @Delete(':id')
  public deletePokemon(@Param('id') id: string) {
    return this.PS.deletePokemon(id);
  }
}
