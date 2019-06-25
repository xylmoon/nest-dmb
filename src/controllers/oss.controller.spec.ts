import { Test, TestingModule } from '@nestjs/testing';
import { OssController } from './oss.controller';

describe('Oss Controller', () => {
  let controller: OssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OssController],
    }).compile();

    controller = module.get<OssController>(OssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
