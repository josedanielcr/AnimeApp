import { Component, Input, OnInit } from '@angular/core';
import { Relationship } from 'src/app/interfaces/single-anime-response';

@Component({
  selector: 'app-category-slideshow',
  templateUrl: './category-slideshow.component.html',
  styleUrls: ['./category-slideshow.component.css']
})
export class CategorySlideshowComponent implements OnInit {

  @Input() categoria : Relationship;

  constructor() { }

  ngOnInit(): void {
    
  }

}
