import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noEpisodeCount'
})
export class NoEpisodeCountPipe implements PipeTransform {

  transform ( episodeCount : number ): string {
    if ( !episodeCount ){
      return 'UNF';
    } else if( episodeCount === 1 ){
      return 'Movie';
    }
    else{
      return episodeCount.toString();
    }
  }

}
