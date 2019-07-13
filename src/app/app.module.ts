import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewsComponent } from './news-component/news.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsBrowserApiService } from './shared/api/news-browser-api-service';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: NewsComponent,
      }
    ]),
  ],
  providers: [NewsBrowserApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
