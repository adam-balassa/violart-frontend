import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  
  @ViewChild('current') currentSection: ElementRef<HTMLElement>;

  constructor(private title: Title, private meta: Meta) {
    
  }

  ngOnInit(): void {
    this.title.setTitle('Aktuális | Violart Stúdió')
  }

  onNavigateToCurrent() {
    this.currentSection.nativeElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
