import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from 'src/app/interfaces/single-anime-response';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-page',
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.css']
})
export class AnimePageComponent implements OnInit {

  public anime : Data;

  constructor( private activatedRoute : ActivatedRoute,
               private animeService : AnimeService ) { }


  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.animeService.GetAnime( id ).subscribe(
      ( response ) => {
        this.anime = response;
        //TODO: Quitar este console log
        console.log( this.anime );
      }
    )
  }

}
