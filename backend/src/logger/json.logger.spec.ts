import { JsonLogger } from './json.logger';

describe('JsonLogger', () => {
  let logger: JsonLogger;
  beforeEach(() => {
    logger = new JsonLogger();
  });
  it('should be defined', () => {
    expect(logger).toBeDefined();
  });

  it('format log messages correctly', () => {
    const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
    logger.log('hello', 'world');
    expect(consoleLogMock).toHaveBeenCalledWith(
      '{"level":"log","message":"hello","optionalParams":[["world"]]}',
    );
    consoleLogMock.mockRestore();
  });
});
