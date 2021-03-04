import { isPlatformBrowser } from '@angular/common';
import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { imageStructure } from 'src/app/model/common';
import { WindowRef } from 'src/app/service/window.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterViewChecked {

  @ViewChildren('gallerySection') sections: QueryList<ElementRef<HTMLElement>>;

  gallerySections = imageStructure;
  navIndicatorPosition = {left: 0, top: 0,};
  
  constructor(
    private route: ActivatedRoute, 
    private changeDetectorRef: ChangeDetectorRef,    
    @Inject(PLATFORM_ID) private platformId: any,
    private windowRef: WindowRef) { 
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.route.paramMap.subscribe(params => this.refreshIndicatorPosition(params));
  }

  refreshIndicatorPosition(params: ParamMap) {
    const currentSection = params.get('section');
    const sectionIndex = imageStructure.findIndex(section => section.folderName === currentSection);
    const sectionNav: HTMLElement = this.sections.get(sectionIndex).nativeElement;
    if (isPlatformBrowser(this.platformId)) {
      const sectionNavRect = sectionNav.getBoundingClientRect();
      this.navIndicatorPosition = {left: sectionNavRect.left, top: sectionNavRect.top + this.windowRef.nativeWindow.scrollY + sectionNavRect.height + 5 };
    }
    
    this.changeDetectorRef.detectChanges();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.refreshIndicatorPosition(this.route.snapshot.paramMap);
  }
}
