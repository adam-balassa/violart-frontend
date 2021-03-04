import { isPlatformBrowser } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GallerySection, getFileNameFromId, imageStructure, getImageId } from 'src/app/model/common';
import { descriptions, technique } from 'src/app/model/descriptions';
import { WindowRef } from 'src/app/service/window.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit, AfterViewChecked {

  @ViewChild('mainImage') image: ElementRef<HTMLImageElement>;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
    private windowRef: WindowRef) { }
    
  loading: boolean;
  imageLoaded: boolean;

  windowSize: number;

  currentImageNumber = 1;
  currentSection: GallerySection;

  indicatorPosition = 0;

  ngAfterViewChecked(): void {
  }

  get currentImageUrl(): string {
    return getFileNameFromId(this.currentSection.folderName, this.currentImageNumber);
  } 
  
  get currentImageUrlMin(): string {
    return getFileNameFromId(this.currentSection.folderName, this.currentImageNumber, true);
  }

  get description(): string {
    return descriptions[this.currentSection.folderName][getImageId(this.currentImageNumber)];
  }
  
  get technique(): string {
    const secton = technique[this.currentSection.folderName];
    if (!secton) return null;
    return secton[getImageId(this.currentImageNumber)];
  }

  getSectionByName(sectionName: string): GallerySection {
    return imageStructure.find(section => section.folderName === sectionName);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.windowSize = this.windowRef.nativeWindow.innerWidth;
    }
    this.route.paramMap.subscribe(params => this.refresh(params));
  }

  refresh(params: ParamMap): void {
    this.currentSection = this.getSectionByName(params.get('section'));
    this.currentImageNumber = parseInt(params.get('image'));

    this.indicatorPosition = (this.currentImageNumber) / (this.currentSection.numberOfImages - 1) * (this.windowSize - 60);
  }

  onPrevious() {
    const nextImage = this.currentImageNumber === 0
      ? this.currentSection.numberOfImages - 1
      : this.currentImageNumber - 1;
    this.startLoading();
    this.router.navigate(['/gallery', this.currentSection.folderName, nextImage]);
  }

  onNext() {
    const nextImage = this.currentImageNumber === this.currentSection.numberOfImages - 1
      ? 0
      : this.currentImageNumber + 1;
    this.startLoading();
    this.router.navigate(['/gallery', this.currentSection.folderName, nextImage]);
  }

  startLoading() {
    this.imageLoaded = false;
    this.image.nativeElement.onload = () => { this.imageLoaded = true; this.loading = false; }
    setTimeout(() => {
      console.log(this.imageLoaded);
      
      if (!this.imageLoaded)
        this.loading = true;
    }, 300);
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.windowSize = window.innerWidth;
    this.refresh(this.route.snapshot.paramMap);
  }
}
