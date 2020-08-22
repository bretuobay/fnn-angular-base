import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CultureComponent } from './components/culture/culture.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { ScienceComponent } from './components/science/science.component';
import { BusinessComponent } from './components/business/business.component';
import { VideosComponent } from './components/videos/videos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'videos', component: VideosComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
