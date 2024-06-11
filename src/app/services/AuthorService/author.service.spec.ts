import { TestBed } from '@angular/core/testing';

import { AuthorService } from './author.service';
import { HttpClientModule } from '@angular/common/http';

describe('AuthorService', () => {
  let service: AuthorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AuthorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
