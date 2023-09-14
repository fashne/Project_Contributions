import { TestBed } from '@angular/core/testing';

import { TemplateListService } from './template-list.service';

describe('TemplateListService', () => {
  let service: TemplateListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
