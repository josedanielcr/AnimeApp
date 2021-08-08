import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Datum } from 'src/app/interfaces/category-response';
import { DatumEpisode } from 'src/app/interfaces/episode-response';
import { Data } from 'src/app/interfaces/single-anime-response';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-page',
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.css']
})
export class AnimePageComponent implements OnInit {

  public anime : Data;
  public categories : Datum[] = [];
  public episodes : DatumEpisode[] = [];
  public id : string;

  constructor( private activatedRoute : ActivatedRoute,
               private animeService : AnimeService,
               private router : Router,
               private location : Location ) { }


  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    combineLatest([ this.animeService.GetAnime( id ) , 
                    this.animeService.GetAnimeCategory( id ),
                    this.animeService.GetAnimeEpisodes( id )])
      .subscribe( ([anime , categories, episodes ]) => {
        this.anime = anime;
        this.id = anime.id;
        this.episodes = episodes;
        this.categories = categories;
      });
  }


  goBack(){
    this.location.back();
  }

}
