import { TskvLogger } from './tskv.logger';

describe('TskvLogger', () => {
  let logger: TskvLogger;

  beforeEach(() => {
    logger = new TskvLogger();
  });

  it('should be defined', () => {
    expect(logger).toBeDefined();
  });

  it('format log messages correctly', () => {
    const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
    logger.log('hello', 'world');
    expect(consoleLogMock).toHaveBeenCalledWith(
      'level=log\tmessage=hello\toptionalParams=world',
    );
    consoleLogMock.mockRestore();
  });
});
