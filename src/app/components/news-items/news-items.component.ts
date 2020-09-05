import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewsItem } from '../../models';

@Component({
  selector: 'news-items',
  templateUrl: './news-items.component.html',
  styleUrls: ['./news-items.component.css'],
  providers: [NewsService],
})
export class NewsItemsComponent implements OnInit {
  @Input() category: string = 'home';
  public articles: NewsItem[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService
      .getNewsByCategory(this.category)
      .subscribe((data: NewsItem[]) => {
        this.articles = data;
      });
  }

  formatDate(publishedAt: string) {
    const date = new Date(publishedAt);
    return `${date.getMonth() + 1}/${date.getDate()} /${date.getFullYear()}`;
  }
}
