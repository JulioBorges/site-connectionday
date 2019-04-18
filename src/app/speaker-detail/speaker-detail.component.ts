import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-speaker-detail',
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.css']
})
export class SpeakerDetailComponent implements OnInit {

  @Input() speaker: any;
  
  constructor() { }

  ngOnInit() {
  }

}
