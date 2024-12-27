import { Test, TestingModule } from '@nestjs/testing';
import { DynamicEntityService } from './dynamic-entity.service';

describe('DynamicService', () => {
  let service: DynamicEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DynamicEntityService],
    }).compile();

    service = module.get<DynamicEntityService>(DynamicEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
