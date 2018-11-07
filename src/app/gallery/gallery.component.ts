import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as Gallery from '../../assets/config/gallery.json'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  protected vm: any;
  protected loadMoreActive: boolean;

  constructor(private chRef: ChangeDetectorRef) {
    this.loadMoreActive = true;
  }

  ngOnInit() {
    this.vm = Gallery.default;
  }

  seeAllImages() {
    this.loadMoreActive = false;
    this.chRef.detectChanges();
    console.log("executoy");
  }

}
