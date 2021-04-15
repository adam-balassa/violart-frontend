import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { News } from 'src/app/service/model';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  @ViewChild('current') currentSection: ElementRef<HTMLElement>;
  news: Observable<News[]>;

  constructor(private title: Title, private meta: Meta, api: ApiService, private sanitizer: DomSanitizer) {
    this.news = api.getNews();
  }

  ngOnInit(): void {
    this.title.setTitle('Aktuális | Violart Stúdió');
    this.meta.updateTag({ name: 'keywords', content: 'Violart, Violart Stúdió, ViolartStudio, Aktualitások, Főoldal' });
    this.meta.updateTag({ name: 'description', content: 'Mit tanulhatsz? Különböző grafikai technikákat, szabadkézi rajzot kezdő szinttől ameddig bírod, csendélettől az aktig, segítek, hogy bekerülhess álmaid művészeti iskolájába...' });
  }

  onNavigateToCurrent() {
    this.currentSection.nativeElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
