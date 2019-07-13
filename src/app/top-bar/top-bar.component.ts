import { Component } from '@angular/core';
import { NewsBrowserApiService } from '../shared/api/news-browser-api-service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent {
  private countries: string[] = ['pl', 'us', 'fr', 'ru', 'hu', 'it', 'nz', 'de', 'cz', 'gb'];
  private categories: string[] = ['technology', 'business', 'entertainment', 'general', 'health', 'science', 'sports'];
  private selectedCountry: string = 'pl';
  private selectedCategory: string = 'technology';

  constructor(private newService: NewsBrowserApiService) {
    this.newService.updateNews(this.selectedCountry, this.selectedCategory);
  }

  onDisplayNewsClicked() {
    this.newService.updateNews(this.selectedCountry, this.selectedCategory);
  }

  onCountrySelected(country: string) {
    this.selectedCountry = country;
  }

  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }
}