import { Test, TestingModule } from '@nestjs/testing';
import { CourseProvider } from './course.provider';

describe('Course', () => {
  let provider: CourseProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseProvider],
    }).compile();

    provider = module.get<CourseProvider>(CourseProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
