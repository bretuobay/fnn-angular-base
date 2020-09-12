import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NEWS_API_URL_ENDPOINT } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getNewsByCategory(payload: string) {
    return this.http.get(NEWS_API_URL_ENDPOINT + payload);
  }
}
