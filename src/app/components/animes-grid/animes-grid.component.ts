import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Datum } from 'src/app/interfaces/anime-response';

@Component({
  selector: 'app-animes-grid',
  templateUrl: './animes-grid.component.html',
  styleUrls: ['./animes-grid.component.css']
})
export class AnimesGridComponent{

  @Input() animes : Datum[];

  constructor( private router : Router){}

  moreInfoAnime( anime : Datum ){
    this.router.navigate([ '/anime', anime.id ]);
  }

}
