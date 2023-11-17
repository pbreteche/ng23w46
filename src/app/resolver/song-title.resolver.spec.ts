import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { songTitleResolver } from './song-title.resolver';

describe('songTitleResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => songTitleResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
