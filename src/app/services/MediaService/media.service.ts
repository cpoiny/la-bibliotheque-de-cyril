import { Injectable } from '@angular/core';
import { Media } from '../../models/media.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  public baseUrl = environment.baseUrl + "medias";

  /**
   * Returns all medias from the API.
   * @returns An Observable that emits an array of Media objects.
   */
  getAllMedias(): Observable<Media[]> {
    return this.http.get<{ data: Media[] }>(this.baseUrl)
      .pipe(map(response => response.data));
  };

  /**
   * Returns a media object by its ID.
   * @param id - The ID of the media object to retrieve.
   * @returns An Observable that emits the media object.
   */
  getMediaById(id: number): Observable<Media> {
    const url = this.baseUrl + "/" + id;
    return this.http.get<{ data: Media }>(url)
      .pipe(map(response => response.data));
  };
}


