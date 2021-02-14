import { Component, HostListener, Input, OnInit } from '@angular/core';
import { opacityAnimation } from 'src/app/animation/animation';


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  @Input() imageUrls: string[];

  get numberOfImages(): number {
    return this.imageUrls.length;
  }

  windowHeight: number;
  scrollPercentage: number = 0;

  currentImage: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.windowHeight = window.innerHeight;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const scrollY = window.scrollY + this.windowHeight / 2;
    const scrollRatio = scrollY / this.windowHeight;
    this.scrollPercentage = Math.round(scrollRatio * 100) % 100;

    const newImageIndex = Math.floor(scrollRatio);
    if (newImageIndex !== this.currentImage)
      this.currentImage = newImageIndex;
  }

}
