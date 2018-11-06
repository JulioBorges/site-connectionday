import { Component, OnInit } from '@angular/core';
import * as Gallery from '../../assets/config/gallery.json'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  protected vm: any;
  protected showAllImages: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.vm = Gallery.default;
  }

  seeAllImages() {
    this.showAllImages = true;
    console.log("executoy");
  }

}
