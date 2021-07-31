import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimesGridComponent } from './animes-grid/animes-grid.component';
import { FooterComponent } from './footer/footer.component';
import { PipesModule } from '../pipes/pipes.module';
import { AppRoutingModule } from '../app-routing.module';
import { EpisodeSlideshowComponent } from './episode-slideshow/episode-slideshow.component';



@NgModule({
  declarations: [NavbarComponent, AnimesGridComponent, FooterComponent, EpisodeSlideshowComponent],
  imports: [
    CommonModule,
    PipesModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    AnimesGridComponent,
    FooterComponent,
    EpisodeSlideshowComponent
  ]
})
export class ComponentsModule { }
