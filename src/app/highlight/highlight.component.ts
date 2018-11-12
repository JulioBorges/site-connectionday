import { Component, OnInit } from '@angular/core';
import * as HeaderConfig from '../../assets/config/header.json';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements OnInit {
  public vm: any;

  constructor() { }

  ngOnInit() {
    this.vm = HeaderConfig.default
  }
}
