import { TestBed } from '@angular/core/testing';

import { PublicationFormService } from './publication-form.service';

describe('PublicationForm.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicationFormService = TestBed.get(PublicationFormService);
    expect(service).toBeTruthy();
  });
});
