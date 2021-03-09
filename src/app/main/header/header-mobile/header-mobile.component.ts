import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { headerAnimation } from 'src/app/animation/animation';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css'],
  animations: [headerAnimation()]
})
export class HeaderMobileComponent implements OnInit {

  @ViewChild('menu') private menuElement: ElementRef<HTMLElement>;

  headerOpen = false;

  constructor(router: Router) { 
    router.events.subscribe(() => {
      this.headerOpen = false;
    });
  }

  ngOnInit(): void {
  }

  onToggleHeader(): void {
    this.headerOpen = !this.headerOpen;
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: HTMLElement) {
    if (this.headerOpen) {
      const clickedOnMenu = this.menuElement.nativeElement.contains(targetElement)
      if (!clickedOnMenu) {
        this.headerOpen = false;
      }
    }
  }
}
