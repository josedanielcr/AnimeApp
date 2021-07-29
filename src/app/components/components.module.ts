import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimesGridComponent } from './animes-grid/animes-grid.component';
import { FooterComponent } from './footer/footer.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [NavbarComponent, AnimesGridComponent, FooterComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    NavbarComponent,
    AnimesGridComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
