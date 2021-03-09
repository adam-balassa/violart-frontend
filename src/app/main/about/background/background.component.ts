import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { opacityAnimation } from 'src/app/animation/animation';
import { WindowRef } from 'src/app/service/window.service';


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

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private windowRef: WindowRef) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.windowHeight = this.windowRef.nativeWindow.innerHeight;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (isPlatformBrowser(this.platformId)) {
      const scrollY = this.windowRef.nativeWindow.scrollY + this.windowHeight / 2;
      const scrollRatio = scrollY / this.windowHeight;
      this.scrollPercentage = Math.round(scrollRatio * 100) % 100;
  
      const newImageIndex = Math.floor(scrollRatio);
      if (newImageIndex !== this.currentImage)
        this.currentImage = newImageIndex;
    }
  }

}
