import { Controller, Get, Param } from '@nestjs/common';
import { SteamService } from '../steam/steam.service';

@Controller('genres')
export class GenresController {
  constructor(private SteamService: SteamService) {}

  @Get()
  public genres() {
    return this.SteamService.genres;
  }

  @Get(':id')
  public getGenre(@Param('id') id: number) {
    return this.SteamService.getGenre(id);
  }

  @Get(':id/games')
  public getGamesPerGenre(@Param('id') id: number) {
    return this.SteamService.games.find((game) => game.genre.id == id);
  }
}
