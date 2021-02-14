import { Component, OnInit } from '@angular/core';
import { GallerySection, getGalleryImages } from 'src/app/model/common';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  readonly imageStructure: GallerySection[] = [
    { folderName: 'architectural_graphics', sectionName: 'Építész grafika', numberOfImages: 0 },
    { folderName: 'graphics', sectionName: 'Képgrafika', numberOfImages: 24 },
    { folderName: 'interieur_architecture', sectionName: 'Belsőépítészet', numberOfImages: 17 },
    { folderName: 'students_work', sectionName: 'Tanítványok munkái', numberOfImages: 0 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getImages(section: GallerySection) { return getGalleryImages(section); }

}
