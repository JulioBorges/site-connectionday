import { Component, OnInit } from '@angular/core';
import * as Speakers from '../../assets/config/speakers.json';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {
  vm: any;

  constructor() { 
  }

  ngOnInit() {
    this.vm = Speakers.default;
  }
}
