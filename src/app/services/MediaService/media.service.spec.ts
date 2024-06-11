import { TestBed } from '@angular/core/testing';
import { MediaService } from './media.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Media } from '../../models/media.model';



describe('MediaService', () => {
  let service: MediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


describe('MediaService', () => {
  let service: MediaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MediaService]
    });
    service = TestBed.inject(MediaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all medias', () => {
    const mockMedias: Media[] = [
      { id: 1, title: 'Media 1', category: 'litterature', theme: 'Theme 1', author_id: 1 },
      { id: 2, title: 'Media 2', category: 'litterature', theme: 'Theme 2', author_id: 2 },
      { id: 3, title: 'Media 3', category: 'litterature', theme: 'Theme 3', author_id: 3 }
    ];

    service.getAllMedias().subscribe(medias => {
      expect(medias).toEqual(mockMedias);
    });

    const req = httpMock.expectOne(service.baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush({ data: mockMedias });
  });
});