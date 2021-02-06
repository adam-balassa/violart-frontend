import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  isVideoPlaying = true;
  isVideoPlayable = true;
  
  constructor() { }

  ngOnInit(): void {
    this.isVideoPlayable = window.innerWidth > 500 
  }

  onBackgroundLoaded() {
    this.isVideoPlaying = window.innerWidth > 500 
  }

  onVideoEnded() {
    setTimeout(() => {
      this.isVideoPlaying = false;
    }, 500)
  }

}
