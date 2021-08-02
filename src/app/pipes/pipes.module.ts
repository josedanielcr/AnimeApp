import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoEpisodeCountPipe } from './no-episode-count.pipe';
import { NoImagePipe } from './no-image.pipe';



@NgModule({
  declarations: [NoEpisodeCountPipe, NoImagePipe],
  imports: [
    CommonModule
  ],
  exports: [
    NoEpisodeCountPipe,
    NoImagePipe
  ]
})
export class PipesModule { }
