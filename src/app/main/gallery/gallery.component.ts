import { AfterViewChecked, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { GallerySection, getGalleryImages, imageStructure } from 'src/app/model/common';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewChecked {

  @ViewChildren('galleryImage') galleryImages: QueryList<ElementRef<HTMLImageElement>>;
  gallerySections = imageStructure;
  isLoading = true;
  private init = true

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    if (this.init) {
      this.init = false;
      const imagesLoaded: Promise<void>[] = this.galleryImages.map(image => GalleryComponent.loadToPromise(image.nativeElement));
      Promise.all(imagesLoaded).then(() => {
        this.isLoading = false;
      });
    }
  }

  getImages(section: GallerySection) { return getGalleryImages(section, true); }

  private static loadToPromise(image: HTMLImageElement): Promise<void> {
    return new Promise<void>(resolve => {
      console.log('img');
      
      image.onload = () => {
        console.log('done');
        
        resolve();
      }
      image.onerror = () => {
        resolve();
      }
    })
  }
}
