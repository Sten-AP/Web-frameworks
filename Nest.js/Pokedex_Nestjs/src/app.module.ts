import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PokemonServiceService } from './pokemon_service/pokemon_service.service';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [PokemonServiceService],
})
export class AppModule {}
