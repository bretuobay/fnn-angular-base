export interface NewsItem {
  source: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  coord: Coord;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  name: string;
}

export interface Currency {
  currency: string;
  value: number;
}
