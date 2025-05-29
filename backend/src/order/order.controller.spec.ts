import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

describe('OrderController', () => {
  let controller: OrderController;
  let service: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService],
    })
      .overrideProvider(OrderService)
      .useValue({
        createOrder: jest.fn(),
      })
      .compile();

    controller = module.get<OrderController>(OrderController);
    service = module.get<OrderService>(OrderService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('.createOrder() should call createOrder method of the service', () => {
    const order = {
      email: 'lalala@example.com',
      phone: '+71234567890',
      tickets: [
        {
          film: 'film',
          session: 'session',
          daytime: '01.01.2025',
          row: 1,
          seat: 1,
          price: 10,
          id: '1',
        },
      ],
    };
    controller.createOrder(order);
    expect(service.createOrder).toHaveBeenCalledWith(order);
  });
});
