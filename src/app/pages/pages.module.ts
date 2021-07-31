import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { AnimePageComponent } from './anime-page/anime-page.component';


@NgModule({
  declarations: [HomeComponent, AnimePageComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
