import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AnimeResponse } from '../interfaces/anime-response';
import { SingleAnimeResponse } from '../interfaces/single-anime-response';
import { CategoryResponse } from '../interfaces/category-response';
import { EpisodeResponse } from '../interfaces/episode-response';



@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private baseUrl = 'https://kitsu.io/api/edge/anime';

  constructor( private http : HttpClient ) { }

  GetMostPopularAnimes(){
    return this.http.get<AnimeResponse>(`${ this.baseUrl }?page%5Blimit%5D=20&sort=popularityRank`)
      .pipe(
        map( ( animes ) => animes.data )
      );
  }

  GetAnime( id : string ){
    return this.http.get<SingleAnimeResponse>(`${ this.baseUrl }/${ id }`)
      .pipe(
        map( ( anime ) => anime.data )
      );
  }

  GetAnimeCategory( id : string ){
    return this.http.get<CategoryResponse>(`${ this.baseUrl }/${ id }/categories`)
      .pipe(
        map( ( categories ) => categories.data )
      )
  }

  GetAnimeEpisodes( id : string ){
    return this.http.get<EpisodeResponse>(`${ this.baseUrl }/${ id }/episodes`)
      .pipe(
        map( ( episodes ) => episodes.data )
      )
  }

  GetAnimeByName( name : string ){
    return this.http.get<AnimeResponse>(`${ this.baseUrl }/?filter%5Btext%5D=${ name }`)
      .pipe(
        map( ( anime ) => anime.data )
      )
  }
}
