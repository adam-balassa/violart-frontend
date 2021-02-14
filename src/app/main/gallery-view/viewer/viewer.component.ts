import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GallerySection, imageStructure } from 'src/app/model/common';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  windowSize: number;

  currentImageNumber = 1;
  currentSection: GallerySection;

  indicatorPosition = 0;

  get currentImageUrl(): string {
    return `/assets/images/gallery/${this.currentSection.folderName}/${this.currentImageNumber}.jpg`;
  }

  getSectionByName(sectionName: string): GallerySection {
    return imageStructure.find(section => section.folderName === sectionName);
  }

  ngOnInit(): void {
    this.windowSize = window.innerWidth;
    this.route.paramMap.subscribe(params => this.refresh(params));
  }

  refresh(params: ParamMap): void {
    this.currentSection = this.getSectionByName(params.get('section'));
    this.currentImageNumber = parseInt(params.get('image'));

    this.indicatorPosition = (this.currentImageNumber - 1.0) / (this.currentSection.numberOfImages - 1.0) * (this.windowSize - 60);
  }

  onPrevious() {
    const nextImage = this.currentImageNumber === 1
      ? this.currentSection.numberOfImages
      : this.currentImageNumber - 1;
    this.router.navigate(['/gallery', this.currentSection.folderName, nextImage]);
  }

  onNext() {
    const nextImage = this.currentImageNumber === this.currentSection.numberOfImages
      ? 1
      : this.currentImageNumber + 1;
    this.router.navigate(['/gallery', this.currentSection.folderName, nextImage]);
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.windowSize = window.innerWidth;
    this.refresh(this.route.snapshot.paramMap);
  }
}
