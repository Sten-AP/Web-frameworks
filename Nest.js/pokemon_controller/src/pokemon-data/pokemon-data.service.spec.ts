import { Test, TestingModule } from '@nestjs/testing';
import { PokemonDataService } from './pokemon-data.service';

describe('PokemonDataService', () => {
  let service: PokemonDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonDataService],
    }).compile();

    service = module.get<PokemonDataService>(PokemonDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
