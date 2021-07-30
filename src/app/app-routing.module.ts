import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimePageComponent } from './pages/anime-page/anime-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'anime/:id', component: AnimePageComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }