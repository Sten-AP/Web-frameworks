import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonDataService } from './pokemon-data/pokemon-data.service';
import { RouterModule } from '@nestjs/router';
@Module({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home' },
        { path: 'pokemon' },
        { path: 'pokemon/:id' },
      ],
      { useHash: true },
    ),
  ],
  controllers: [AppController],
  providers: [AppService, PokemonDataService],
})
export class AppModule {}
