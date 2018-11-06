import { Component, OnInit } from '@angular/core';
import * as InfoConfig from '../../assets/config/info.json';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  protected vm: any;

  constructor() { }

  ngOnInit() {
    // ícones podem ser encontrados neste link https://themes-pixeden.com/font-demos/7-stroke/
    this.vm = InfoConfig.default
  }

}
