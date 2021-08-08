import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Datum } from 'src/app/interfaces/anime-response';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public searchedAnime : string;
  public animes : Datum[] = [];
  public loading : boolean = false;

  constructor( private activatedRoute : ActivatedRoute,
               private animeService : AnimeService ) { 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((animeTxt) => {
      this.loading = false;
      this.searchedAnime = animeTxt.text;
      this.animeService.GetAnimeByName( animeTxt.text )
      .subscribe( ( response ) => {
        this.animes = response;
        this.loading = true;
      })
    });
  }

}
