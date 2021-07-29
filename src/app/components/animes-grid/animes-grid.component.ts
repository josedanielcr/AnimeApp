import { Component, OnInit, Input } from '@angular/core';
import { Datum } from 'src/app/interfaces/anime-response';

@Component({
  selector: 'app-animes-grid',
  templateUrl: './animes-grid.component.html',
  styleUrls: ['./animes-grid.component.css']
})
export class AnimesGridComponent implements OnInit {

  @Input() animes : Datum[];

  ngOnInit(): void {
  }

}
