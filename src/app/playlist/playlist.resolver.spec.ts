import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { playlistResolver } from './playlist.resolver';

describe('playlistResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => playlistResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
