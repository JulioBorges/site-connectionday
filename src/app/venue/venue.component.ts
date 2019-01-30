import { Component, OnInit } from '@angular/core';
import * as Venue from '../../assets/config/venue.json'

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  public vm: any;

  constructor() { }

  ngOnInit() {
    this.vm = Venue.default;
  }

}
