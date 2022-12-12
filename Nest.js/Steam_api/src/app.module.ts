import { Module } from '@nestjs/common';
import { SteamService } from './steam/steam.service';
import { GamesController } from './games/games.controller';
import { GenresController } from './genres/genres.controller';

@Module({
  imports: [],
  controllers: [GamesController, GenresController],
  providers: [SteamService],
})
export class AppModule {}
