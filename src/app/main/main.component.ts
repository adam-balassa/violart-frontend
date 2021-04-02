import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor (meta: Meta) {
    meta.updateTag({property: 'og:title', content: 'ViolArt Stúdió'});
    meta.updateTag({property: 'og:description', content: 'Mit tanulhatsz? Különböző grafikai technikákat, szabadkézi rajzot kezdő szinttől ameddig bírod, csendélettől az aktig, segítek, hogy bekerülhess álmaid művészeti iskolájába...'});
    meta.updateTag({property: 'og:url', content: 'https://violartstudio.com'});
    meta.updateTag({property: 'og:image', content: 'https://violart.s3.eu-central-1.amazonaws.com/images/bg1-min.jpg'});
  }

  ngOnInit(): void {
  }

}
