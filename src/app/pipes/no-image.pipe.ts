import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform( imageUrl : string): string {
    if( imageUrl === null){
      return './assets/no-image';
    } else{
      return imageUrl;
    }
  }

}
