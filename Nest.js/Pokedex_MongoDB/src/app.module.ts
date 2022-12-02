import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PokemonServiceService } from './pokemon_service/pokemon_service.service';
import { PokemonModule } from './pokemon/pokemon.module';
@Module({
  imports: [PokemonModule],
  controllers: [AppController],
  providers: [PokemonServiceService],
})
export class AppModule {}
