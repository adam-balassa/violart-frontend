import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { WindowRef } from 'src/app/service/window.service';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  isVideoPlaying = true;
  isVideoPlayable = true;
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private windowRef: WindowRef) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isVideoPlayable = this.windowRef.nativeWindow.innerWidth > 500;
    }
  }

  onBackgroundLoaded() {
    if (isPlatformBrowser(this.platformId)) {
      this.isVideoPlaying = this.windowRef.nativeWindow.innerWidth > 500;
    }
  }

  onVideoEnded() {
    setTimeout(() => {
      this.isVideoPlaying = false;
    }, 500)
  }

}
