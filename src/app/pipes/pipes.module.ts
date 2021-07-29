import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoEpisodeCountPipe } from './no-episode-count.pipe';



@NgModule({
  declarations: [NoEpisodeCountPipe],
  imports: [
    CommonModule
  ],
  exports: [
    NoEpisodeCountPipe
  ]
})
export class PipesModule { }
