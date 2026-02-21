import type { ColorPallet } from "./home";

export type IconCatalog = 'fa-file-lines' | 'fa-calendar' | 'fa-book' ;


export type colorCard = {
  icon: IconCatalog;
  color: ColorPallet
  title: string;
  description: string;
}

export type BookCard = {
  colorbg: ColorPallet;
  title: string;
  bookNumber?: number;
  description: string;
  publishedDate: string;
  pagesNumber: number;
}