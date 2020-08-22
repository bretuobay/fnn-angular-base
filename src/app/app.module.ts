import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CultureComponent } from './components/culture/culture.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { ScienceComponent } from './components/science/science.component';
import { BusinessComponent } from './components/business/business.component';
import { VideosComponent } from './components/videos/videos.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
