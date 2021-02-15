export interface GallerySection {
    numberOfImages: number;
    sectionName: string;
    folderName: string;
}

export function getGalleryImages(section: GallerySection): string[] {
    return [...Array(section.numberOfImages).keys()].map(i => `/assets/images/gallery/${section.folderName}/${i + 1}.jpg`);
}

export const imageStructure: GallerySection[] = [
    { folderName: 'architectural_graphics', sectionName: 'Építész grafika', numberOfImages: 11 },
    { folderName: 'graphics', sectionName: 'Képgrafika', numberOfImages: 24 },
    { folderName: 'interieur_architecture', sectionName: 'Belsőépítészet', numberOfImages: 17 },
    { folderName: 'students_work', sectionName: 'Tanítványok munkái', numberOfImages: 19 }
  ]