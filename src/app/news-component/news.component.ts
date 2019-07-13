import { Component } from '@angular/core';
import { RegionalNews } from '../shared/model/regional-news';
import { NewsBrowserApiService } from '../shared/api/news-browser-api-service';

@Component({
  selector: 'app-news-component',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})

export class NewsComponent {
  private regionalNews: RegionalNews = new RegionalNews();

  constructor(private newsService: NewsBrowserApiService) {
    this.newsService.getNews().subscribe(news => this.regionalNews = news);
  }
}