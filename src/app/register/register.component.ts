import { Component, OnInit } from '@angular/core';
import * as Register from '../../assets/config/register.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public vm: any;

  constructor() { }

  ngOnInit() {
    this.vm = Register.default
  }
}
