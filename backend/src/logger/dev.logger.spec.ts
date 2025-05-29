import { ConsoleLogger } from '@nestjs/common';
import { DevLogger } from './dev.logger';

describe('DevLogger', () => {
  it('should be defined', () => {
    expect(new DevLogger()).toBeDefined();
  });

  it('should extend ConsoleLogger', () => {
    const logger = new DevLogger();
    expect(logger).toBeInstanceOf(ConsoleLogger);
  });
});
