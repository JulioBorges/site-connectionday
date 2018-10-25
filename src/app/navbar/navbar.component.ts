import { Component, OnInit } from '@angular/core';
import * as PageConfig from '../../assets/config/page-conf.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  protected vm: any;

  constructor() { }

  ngOnInit() {
    this.vm = PageConfig.default
    console.log(this.vm)
  }

}
