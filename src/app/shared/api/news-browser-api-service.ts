import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { RegionalNews } from '../model/regional-news';
import { environment } from '../../../environments/environment';

export class NewsBrowserApiService {
  private regionalNews = new Subject<RegionalNews>();

  constructor(private http: HttpClient) {
  }

  getNews(): Observable<RegionalNews> {
    return this.regionalNews.asObservable();
  }

  updateNews(country: string, category: string) {
    var url = environment.newsApiUrl + `${country}/${category}`;

    this.http.get<RegionalNews>(url)
      .subscribe(
        news => this.regionalNews.next(news),
        error => this.onError(),
      );
  }

  onError() {
    window.alert('Something went wrong... Try again later...');
  }
}
