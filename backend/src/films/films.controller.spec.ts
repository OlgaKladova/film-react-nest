import { Test, TestingModule } from '@nestjs/testing';
import { FilmsControllerTsController } from './films.controller.ts.controller';

describe('FilmsControllerTsController', () => {
  let controller: FilmsControllerTsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmsControllerTsController],
    }).compile();

    controller = module.get<FilmsControllerTsController>(
      FilmsControllerTsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
