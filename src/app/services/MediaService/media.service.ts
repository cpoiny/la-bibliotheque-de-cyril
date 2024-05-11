import { Injectable } from '@angular/core';
import { MEDIAS } from '../../mocks/media.mock';
import { Media } from '../../models/media.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  
  
  books: Media[] = MEDIAS;
  constructor(private http: HttpClient) { }

  public baseUrl = "http://localhost:8086/medias";

  getAllMedias(): Observable<Media[]> {
    return this.http.get<{ data: Media[] }>(this.baseUrl)
    .pipe(map(response => response.data));
  }

  getMediaById(id: number): Observable<Media> {
    const url = this.baseUrl+ "/" + id;
    return this.http.get<{ data: Media }>(url)
    .pipe(map(response => response.data));
  }


}


