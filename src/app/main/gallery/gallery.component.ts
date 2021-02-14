import { Component, OnInit } from '@angular/core';
import { GallerySection, getGalleryImages, imageStructure } from 'src/app/model/common';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallerySections = imageStructure;
  constructor() { }

  ngOnInit(): void {
  }

  getImages(section: GallerySection) { return getGalleryImages(section); }

}
