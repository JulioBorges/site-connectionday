import { Component, OnInit } from '@angular/core';
import * as Testimonial from '../../assets/config/testimonial.json'

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  protected vm: any;

  constructor() { }

  ngOnInit() {
    this.vm = Testimonial.default;
  }

}
