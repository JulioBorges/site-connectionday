import { Component, OnInit } from '@angular/core';
import * as HeaderConfig from '../../assets/config/header.json';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public vm: any;

  constructor() { }

  ngOnInit() {
    this.vm = HeaderConfig.default
  }
}
