export interface GallerySection {
    numberOfImages: number;
    sectionName: string;
    folderName: string;
}

export function getGalleryImages(section: GallerySection, min: boolean = false): string[] {
    return [...Array(section.numberOfImages).keys()].map(i => getFileNameFromId(section.folderName, i, min));
}

export function getFileNameFromId(sectionName: string, i: number, min: boolean = false) {
    return `/assets/images/gallery/${sectionName}/${getImageId(i)}${min ? '-min' : ''}.jpg`;
}


export function getImageId(i: number): string {
    return `${Math.floor(i / 4) + 1}_${(i % 4 + 1)}`;
}

export const imageStructure: GallerySection[] = [
    { folderName: 'architectural_graphics', sectionName: 'Építész grafika', numberOfImages: 16 },
    { folderName: 'graphics', sectionName: 'Képgrafika', numberOfImages: 20 },
    { folderName: 'interieur_architecture', sectionName: 'Belsőépítészet', numberOfImages: 24 },
    { folderName: 'students_work', sectionName: 'Tanítványok munkái', numberOfImages: 20 }
  ]