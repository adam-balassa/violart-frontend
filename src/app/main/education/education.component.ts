import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Oktatás | Violart Stúdió');    
    this.meta.updateTag({ name: 'keywords', content: 'Violart, Violart Stúdió, ViolartStudio, Oktatás, Tehetségfelmérés, Kurzus, Kurzusaink, Rajzoktatás, Technikák, Előkészítő, Photoshop' })
    this.meta.updateTag({ name: 'description', content: 'Mit tanulhatsz? Különböző grafikai technikákat, szabadkézi rajzot kezdő szinttől ameddig bírod, csendélettől az aktig, segítek, hogy bekerülhess álmaid művészeti iskolájába...' })
  }

}
