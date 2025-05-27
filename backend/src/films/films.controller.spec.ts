import { Test, TestingModule } from '@nestjs/testing';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';

describe('FilmsController', () => {
  let controller: FilmsController;
  let service: FilmsService;
  const mockService = {
    findAll: jest.fn(),
    findById: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmsController],
      providers: [FilmsService],
    })
      .overrideProvider(FilmsService)
      .useValue(mockService)
      .compile();

    controller = module.get<FilmsController>(FilmsController);
    service = module.get<FilmsService>(FilmsService);
  });

  it('.getFilms() should call findAll method of the service', () => {
    controller.getFilms();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('.getSchedule() should call findById method of the service', () => {
    const id = '1';
    controller.getSchedule(id);
    expect(service.findById).toHaveBeenCalledWith(id);
  });
});
