import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AnimeResponse } from '../interfaces/anime-response';



@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private baseUrl = 'https://kitsu.io/api/edge/';

  constructor( private http : HttpClient ) { }

  GetMostPopularAnimes(){
    return this.http.get<AnimeResponse>(`${this.baseUrl}/anime?page%5Blimit%5D=20&sort=popularityRank`)
      .pipe(
        map( (animes) => animes.data )
      );
  }
}
