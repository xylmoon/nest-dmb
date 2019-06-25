import { Test, TestingModule } from '@nestjs/testing';
import { VideoController } from './video.controller';

describe('Video Controller', () => {
  let controller: VideoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoController],
    }).compile();

    controller = module.get<VideoController>(VideoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
