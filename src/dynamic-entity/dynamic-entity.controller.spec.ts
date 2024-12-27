import { Test, TestingModule } from '@nestjs/testing';
import { DynamicEntityController } from './dynamic-entity.controller';
import { DynamicEntityService } from './dynamic-entity.service';

describe('DynamicController', () => {
  let controller: DynamicEntityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DynamicEntityController],
      providers: [DynamicEntityService],
    }).compile();

    controller = module.get<DynamicEntityController>(DynamicEntityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
