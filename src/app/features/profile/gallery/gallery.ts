import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItem } from '../../../shared/models/user.model';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
  standalone: true
})
export class Gallery {
  @Input() items: GalleryItem[] = [];
  selectedItem: GalleryItem | null = null;
  selectedIndex: number = -1;

  openLightbox(item: GalleryItem, index: number): void {
    this.selectedItem = item;
    this.selectedIndex = index;
  }

  closeLightbox(): void {
    this.selectedItem = null;
    this.selectedIndex = -1;
  }

  nextItem(): void {
    if (this.selectedIndex < this.items.length - 1) {
      this.selectedIndex++;
      this.selectedItem = this.items[this.selectedIndex];
    }
  }

  prevItem(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.selectedItem = this.items[this.selectedIndex];
    }
  }
}
