import { Test, TestingModule } from '@nestjs/testing';
import { PokemonServiceService } from './pokemon_service.service';

describe('PokemonServiceService', () => {
  let service: PokemonServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonServiceService],
    }).compile();

    service = module.get<PokemonServiceService>(PokemonServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
