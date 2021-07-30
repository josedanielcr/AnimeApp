import { Component, HostListener, OnInit } from '@angular/core';
import { AnimeResponse, Datum } from 'src/app/interfaces/anime-response';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public animes: Datum[] = [];

  constructor(private animeService : AnimeService) { }

  ngOnInit(): void {
    this.animeService.GetMostPopularAnimes().subscribe((data) => {
      this.animes = data;  
    });
  }

}
