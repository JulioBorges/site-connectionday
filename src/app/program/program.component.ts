import { Component, OnInit } from '@angular/core';
import * as Program from '../../assets/config/program.json'
import * as Speakers from '../../assets/config/speakers.json';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  public vm: any;
  public speakers: Array<any>;

  constructor() { }

  ngOnInit() {
    this.vm = Program.default;
    this.speakers = Speakers.default.speakers;
  }

}
