import { AfterContentChecked, AfterViewChecked, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { imageStructure } from 'src/app/model/common';

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
    private changeDetectorRef: ChangeDetectorRef) { 
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
    const sectionNavRect = sectionNav.getBoundingClientRect();
    this.navIndicatorPosition = {left: sectionNavRect.left, top: sectionNavRect.top + window.scrollY + sectionNavRect.height + 5 };
    
    this.changeDetectorRef.detectChanges();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.refreshIndicatorPosition(this.route.snapshot.paramMap);
  }
}
