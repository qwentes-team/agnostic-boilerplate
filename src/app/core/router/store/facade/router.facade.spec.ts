import {TestBed} from '@angular/core/testing';

import {RouterFacade} from './router.service';

describe('RouterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouterFacade = TestBed.get(RouterFacade);
    expect(service).toBeTruthy();
  });
});
