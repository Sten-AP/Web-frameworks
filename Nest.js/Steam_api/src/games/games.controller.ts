import { Controller, Get, Param } from '@nestjs/common';
import { SteamService } from '../steam/steam.service';

@Controller('games')
export class GamesController {
  constructor(private SteamService: SteamService) {}

  @Get()
  public games() {
    return this.SteamService.games;
  }

  @Get(':id')
  public getGame(@Param('id') id: number) {
    return this.SteamService.getGame(id);
  }
}
