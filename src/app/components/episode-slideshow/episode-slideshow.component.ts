import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DatumEpisode } from 'src/app/interfaces/episode-response';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

@Component({
  selector: 'app-episode-slideshow',
  templateUrl: './episode-slideshow.component.html',
  styleUrls: ['./episode-slideshow.component.css']
})
export class EpisodeSlideshowComponent implements OnInit, AfterViewInit {

  @Input() episodes : DatumEpisode[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container',{
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

}
