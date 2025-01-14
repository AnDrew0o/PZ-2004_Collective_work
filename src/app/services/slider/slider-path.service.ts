import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { SlideInterface } from 'src/app/models/slide';

@Injectable({
  providedIn: 'root'
})
export class SliderPathService {
  files: SlideInterface[] = [
    { url: 'assets/slides/slide-1.jpg', title: 'slide-1' },
    { url: 'assets/slides/slide-2.png', title: 'slide-2' },
    { url: 'assets/slides/slide-3.jpg', title: 'slide-3' },
    { url: 'assets/slides/slide-4.jpg', title: 'slide-4' },
    { url: 'assets/slides/slide-5.jpg', title: 'slide-5' },
    { url: 'assets/slides/slide-6.jpg', title: 'slide-6' },
    { url: 'assets/slides/slide-7.jpg', title: 'slide-7' }
  ];

  getSlides() {
    return this.files;
  }
}
