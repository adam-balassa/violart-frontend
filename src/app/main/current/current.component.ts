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
    this.title.setTitle('Aktuális | Violart Stúdió');    
    this.meta.updateTag({ name: 'keywords', content: 'Violart, Violart Stúdió, ViolartStudio, Aktualitások, Főoldal' })
    this.meta.updateTag({ name: 'description', content: 'Mit tanulhatsz? Különböző grafikai technikákat, szabadkézi rajzot kezdő szinttől ameddig bírod, csendélettől az aktig, segítek, hogy bekerülhess álmaid művészeti iskolájába...' })
  }

  onNavigateToCurrent() {
    this.currentSection.nativeElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
