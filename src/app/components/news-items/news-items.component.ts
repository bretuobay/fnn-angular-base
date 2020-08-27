import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'news-items',
  templateUrl: './news-items.component.html',
  styleUrls: ['./news-items.component.css'],
  providers: [NewsService],
})
export class NewsItemsComponent implements OnInit {
  @Input() category: string = 'home';
  public articles: any;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNewsByCategory(this.category).subscribe((data) => {
      this.articles = data;
    });
  }
}
