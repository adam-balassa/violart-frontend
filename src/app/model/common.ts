export interface GallerySection {
    numberOfImages: number;
    sectionName: string;
    folderName: string;
}

export function getGalleryImages(section: GallerySection): string[] {
    return [...Array(section.numberOfImages).keys()].map(i => `/assets/images/gallery/${section.folderName}/${i + 1}.jpg`);
  }