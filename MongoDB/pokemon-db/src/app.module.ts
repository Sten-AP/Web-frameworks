import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon/pokemon.service';
import { PokemonController } from './pokemon/pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI)],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class AppModule {}
