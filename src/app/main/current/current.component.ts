import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
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
