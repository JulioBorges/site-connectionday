import { Component, OnInit } from '@angular/core';
import * as Funfacts from '../../assets/config/funfacts.json'
@Component({
  selector: 'app-funfacts',
  templateUrl: './funfacts.component.html',
  styleUrls: ['./funfacts.component.css']
})
export class FunfactsComponent implements OnInit {
  protected vm:any;

  constructor() { }

  ngOnInit() {
    this.vm = Funfacts.default;
  }

}
