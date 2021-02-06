import { Component, OnInit } from '@angular/core';
import { headerAnimation } from 'src/app/animation/animation';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css'],
  animations: [headerAnimation()]
})
export class HeaderMobileComponent implements OnInit {

  headerOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleHeader(): void {
    this.headerOpen = !this.headerOpen;
  }
}
