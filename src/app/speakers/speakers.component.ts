import { Component, OnInit } from '@angular/core';
import * as Speakers from '../../assets/config/speakers.json';
import { Globals } from '../../globals';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css'],
  providers: [ Globals ]
})
export class SpeakersComponent implements OnInit {
  protected vm: any;

  constructor(public globals: Globals) { 
  }

  ngOnInit() {
    this.vm = Speakers.default;
  }

  clickPopup(speaker: any) {
    this.globals.SPEAKER = speaker;
  }
}
