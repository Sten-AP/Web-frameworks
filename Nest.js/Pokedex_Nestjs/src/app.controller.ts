import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PokemonServiceService } from './pokemon_service/pokemon_service.service';
import { PokemonInterface } from './pokemon_interface/pokemon_interface.interface';
@Controller('pokemons')
export class AppController {
  constructor(private PokemonService: PokemonServiceService) {}

  @Get()
  public getAllPokemon() {
    return this.PokemonService.getAllPokemon();
  }

  @Get(':id')
  public getPokemonById(@Param('id') id: string) {
    return this.PokemonService.getPokemonById(id);
  }

  @Post()
  public createPokemon(@Body() pokemon: PokemonInterface) {
    return this.PokemonService.createPokemon(pokemon);
  }

  @Put(':id')
  public updatePokemon(
    @Body() pokemon: PokemonInterface,
    @Param('id') id: string,
  ) {
    return this.PokemonService.updatePokemon(id, pokemon);
  }

  @Delete(':id')
  public deletePokemon(@Param('id') id: string) {
    return this.PokemonService.deletePokemon(id);
  }
}
