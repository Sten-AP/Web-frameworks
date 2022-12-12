import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as steamData from '../steam.json';
import { SteamLibrary } from '../steam/steam.interface';

@Injectable()
export class SteamService {
  private steamLibrary: SteamLibrary = steamData;

  public get games() {
    return this.steamLibrary.games;
  }

  public getGame(id: number) {
    console.log(this.games.find((game) => game.id == id));
    return this.games.find((game) => game.id == id);
  }

  public get genres() {
    return this.steamLibrary.genres;
  }

  public getGenre(id: number) {
    return this.genres.find((genre) => genre.id == id);
  }
}
