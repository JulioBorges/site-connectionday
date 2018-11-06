import { Component, OnInit } from '@angular/core';
import * as Sponsors from '../../assets/config/sponsors.json'

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  protected vm:any;

  constructor() { }

  ngOnInit() {
    this.vm = Sponsors.default;
  }

}
