import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  
  @ViewChild('current') currentSection: ElementRef<HTMLElement>;

  ngOnInit(): void {

  }

  onNavigateToCurrent() {
    this.currentSection.nativeElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
