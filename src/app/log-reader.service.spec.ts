import { TestBed } from '@angular/core/testing';

import { LogReaderService } from './log-reader.service';

describe('LogReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogReaderService = TestBed.get(LogReaderService);
    expect(service).toBeTruthy();
  });
});
