import { Component, OnInit } from '@angular/core';
import * as PageConfig from '../assets/config/page-conf.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  protected vm: any;

  constructor() { }

  ngOnInit() {
    this.vm = PageConfig.default
  }
}
