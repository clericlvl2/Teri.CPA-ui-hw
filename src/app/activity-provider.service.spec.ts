import { TestBed } from '@angular/core/testing';

import { ActivityProviderService } from './activity-provider.service';

describe('ActivityProviderService', () => {
  let service: ActivityProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
