import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CultureComponent } from './components/culture/culture.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { ScienceComponent } from './components/science/science.component';
import { BusinessComponent } from './components/business/business.component';
import { VideosComponent } from './components/videos/videos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { NewsItemsComponent } from './components/news-items/news-items.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CurrencyComponent } from './components/currency/currency.component';

@NgModule({
  declarations: [
    AppComponent,
    CultureComponent,
    EntertainmentComponent,
    HomeComponent,
    TechnologyComponent,
    ScienceComponent,
    BusinessComponent,
    VideosComponent,
    HeaderComponent,
    FooterComponent,
    NewsItemsComponent,
    WeatherComponent,
    CurrencyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
