import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimePageComponent } from './pages/anime-page/anime-page.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'anime/:id', component: AnimePageComponent },
  { path: 'search/:text', component: SearchPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }