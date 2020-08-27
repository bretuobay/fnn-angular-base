import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const NEWS_API_URL_ENDPOINT = 'http://localhost:3000/api/news/';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getNewsByCategory(payload: string) {
    return this.http.get(NEWS_API_URL_ENDPOINT + payload);
  }
}
